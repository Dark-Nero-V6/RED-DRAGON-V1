const { cmd, commands } = require("../command");
const { downloadContentFromMessage } = require('@whiskeysockets/baileys');
const { exec } = require('child_process');
const fs = require('fs-extra');
const ffmpeg = require("ffmpeg");

module.exports = {
    name: 'sticker',
    category: 'converter',
    desc: 'පින්තූර ස්ටිකර් බවට පත් කරයි',
    async execute(client, m, config) {
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

                // මේ පේළිය හරිම පරිස්සමෙන් කොපි කරන්න
                exec(ffmpeg -i ${fileName} -vcodec libwebp -filter:v "scale='if(gt(a,1),512,-1)':'if(gt(a,1),-1,512)',pad=512:512:(512-iw)/2:(512-ih)/2:color=0x00000000" ${stickerName}, async (err) => {
                    
                    if (err) {
                        console.error(err);
                        await fs.remove(fileName);
                        return m.reply("ස්ටිකර් එක හදන්න බැරි වුණා! (FFmpeg Error)");
                    }

                    await client.sendMessage(m.from, { sticker: await fs.readFile(stickerName) }, { quoted: m });
                    
                    // වැඩේ ඉවර වුණාම temp ෆයිල් මකනවා
                    await fs.remove(fileName);
                    await fs.remove(stickerName);
                });

            } else {
                m.reply(කරුණාකර පින්තූරයකට Mention කර ${config.prefix}sticker ලෙස ටයිප් කරන්න.);
            }
        } catch (e) {
            console.log(e);
            m.reply("වැරදීමක් සිදුවුණා!");
        }
    }
};
