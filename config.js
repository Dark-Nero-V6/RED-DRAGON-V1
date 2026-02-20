const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || "https://github.com/Dark-Nero-V6/Dark-Nero-V7/blob/main/Images/FekrFcb2R2G72ZxKDAF2dg.webp?raw=true",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 RED-DRAGON Is Alive Now😍*",
BOT_OWNER: '94764771497',  // Replace with the owner's phone number



};
