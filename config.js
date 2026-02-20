const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "JVEFhRLR#br8dtcSUXUzognByf2mNhArd2w_SUHNBC8OeqpfdRU0",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Dark-Nero-V6/Dark-Nero-V7/blob/main/Images/FekrFcb2R2G72ZxKDAF2dg.webp?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hellow...👋*

I am alive now....🔥

🤖 RED DRAGON V 1.0.0 🐉
━━━━━━━━━━━━━━━━━━━
✅ Status: ONLINE
⚡ Speed: Super Fast
🧠 Mode: Hacker Activated
👑 Owner: Rashmika

🔥 System running perfectly…
💬 Send commands and enjoy!

“Power isn’t given… it’s taken.” 😈

> Powered by Rashmika Tec...
━━━━━━━━━━━━━━━━━━━",
BOT_OWNER: '94764771497',  // Replace with the owner's phone number



};
