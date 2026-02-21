const { cmd, commands } = require('../command');
const config = require('../config');
const os = require("systeminformation");
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
let status = '*Uptime:* ${runtime(process.uptime())}\n*Rum usage:* ${(process.memoryUsage().heapUsed / 1024 /1024).toFixed(2)}MB / ${math.round(require('os').totalmem / 1024 / 1024)MB\n*Host name:* ${os.hostname()}\n*Owner:* Sasidu Rashmika'
                                                                                 
   return reply('${status}')
                                                                                 
                                                                                 
    }catch(e)}
    console.log(e)
    reply('${e}')

    }
    })
