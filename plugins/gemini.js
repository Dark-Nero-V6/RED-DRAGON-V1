const { cmd } = require('../command');
const axios = require("axios");
const config = require('../config');

const GEMINI_API_KEY = config.GEMINI_API_KEY;

cmd({
  pattern: "gemini",
  alias: ["ai", "chatgpt"],
  react: '🤖',
  desc: "Ask anything to Google Gemini AI.",
  category: "ai",
  use: ".gemini <question>",
  filename: __filename
}, async (conn, mek, msg, { args, pushname, reply }) => {

  try {

    if (!GEMINI_API_KEY) {
      return reply("❌ Gemini API key not found in config.");
    }

    const text = args.join(" ");
    if (!text) {
      return reply("❗ Please give me a question.");
    }

    const prompt = `My name is ${pushname}. Your name is Robin AI. You are a WhatsApp AI bot made by Isara Sihilel. Answer like a human with emojis. Question: ${text}`;

    const response = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`,
      {
        contents: [
          {
            parts: [{ text: prompt }]
          }
        ]
      },
      {
        headers: { "Content-Type": "application/json" }
      }
    );

    const aiResponse =
      response?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!aiResponse) {
      return reply("❌ AI response not received.");
    }

    reply(aiResponse);

  } catch (error) {
    console.log(error.response?.data || error.message);
    reply("❌ Error: " + (error.response?.data?.error?.message || error.message));
  }
});
