const { cmd, commands } = require("../command");
const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const { exec } = require('child_process');
const fs = require('fs-extra');
const ffmpeg = require("ffmpeg");

cmd({
    pattern: "alive",
    react: "🧑‍💻",
    desc: "Check bot online or offline.",
    category: "main",
    filename: __filename
},
    async (client, config, m, {
    from, quoted, body, isCmd, command, args, q, isGroup,
    sender, senderNumber, botNumber2, botNumber, pushname,
    isMe, isOwner, groupMetadata, groupName, participants,
    groupAdmins, isBotAdmins, isAdmins, reply
}) => {
    try {
            const quoted = m.quoted ? m.quoted : m;
            const mime = (quoted.msg || quoted).mimetype || '';

            if (/image/.test(mime)) {
                let media = await downloadContentFromMessage(quoted.msg || quoted, 'image');
                let buffer = Buffer.from([]);
                for await (const chunk of media) {
                    buffer = Buffer.concat([buffer, chunk]);
                }

                let fileName = `./temp_${Date.now()}.jpg`;
                let stickerName = `./temp_${Date.now()}.webp`;
                
                await fs.writeFile(fileName, buffer);

                // ffmpeg command එක පහත පේළියේ ඇත
                let cmd = `ffmpeg -i ${fileName} -vcodec libwebp -filter:v "scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(512-iw)/2:(512-ih)/2:color=0x00000000" ${stickerName}`;

                exec(cmd, async (err) => {
                    if (err) {
                        console.error(err);
                        if (fs.existsSync(fileName)) await fs.remove(fileName);
                        return m.reply("Error: FFmpeg වැඩ කරන්නේ නැත!");
                    }

                    await client.sendMessage(m.from, { sticker: await fs.readFile(stickerName) }, { quoted: m });
                    
                    if (fs.existsSync(fileName)) await fs.remove(fileName);
                    if (fs.existsSync(stickerName)) await fs.remove(stickerName);
                });

            } else {
                m.reply("කරුණාකර පින්තූරයකට Mention කර ${config.prefix}sticker ලෙස ටයිප් කරන්න.");
            }
        } catch (e) {
            console.error(e);
            m.reply("වැරදීමක් සිදුවුණා!");
        }
    }
};
