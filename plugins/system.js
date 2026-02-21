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
    let status = 'sasidu rashmika'
    return reply($'{status}')

    }catch(e){
    console.log(e)
    reply('${e}')
    }
});
