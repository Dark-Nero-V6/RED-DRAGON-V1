const { cmd, commands } = require('../command');
const config = require('../config');
const os = require("os");
const {runtime} = require('../lib/functions');

cmd({
    pattern: "system",
    react: "🧬",
    desc: "Check bot system",
    category: "main",
    filename: __filename
},
async (danuwa, mek, m, {
    from, quoted, body, isCmd, command, args, q, isGroup,
    sender, senderNumber, botNumber2, botNumber, pushname,
    isMe, isOwner, groupMetadata, groupName, participants,
    groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try{
         const start = new Date().getTime();\n\nawait conn.sendMessage(from, { text: "🏓 Pong..." }, { quoted: mek });\n\nconst end = new Date().getTime();\n\nconst speed = end - start;\n\nawait conn.sendMessage(from, { text: ⚡ Speed: ${speed}ms }, { quoted: mek });
});
