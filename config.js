const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JVEFhRLR#br8dtcSUXUzognByf2mNhArd2w_SUHNBC8OeqpfdRU0",
GEMINI_API_KEY: process.env.GEMINI_API_KEY || 'AIzaSyCuiBh4Ru0bp3BkK49XREWq_olnKWm7Eo0',
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Dark-Nero-V6/Dark-Nero-V7/blob/main/Images/FekrFcb2R2G72ZxKDAF2dg.webp?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hellow...👋*\n\nI am alive now....🔥\n\n*🤖 RED DRAGON V 1.0.0 🐉*\n━━━━━━━━━━━━━━━━━━━\n✅ Status: ONLINE\n⚡ Speed: Super Fast\n🧠 Mode: Hacker Activated\n👑 Owner: Rashmika\n\n🔥 System running perfectly…\n💬 Send commands and enjoy!\n\n“Power isn’t given… it’s taken.” 😈\n\n> Powered by Rashmika Tec...\n━━━━━━━━━━━━━━━━━━━",
BOT_OWNER: '94764771497',  // Replace with the owner's phone number



};
