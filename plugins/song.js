const fs = require('fs');
const { cmd } = require("../command");
const yts = require("yt-search");
const { Downloader } = require("ytdl-mp3");

// ✅ make folder if not exists
if (!fs.existsSync('./temp_songs')) fs.mkdirSync('./temp_songs');

const downloader = new Downloader({
  getTags: true,
  output: "./temp_songs", // safe folder
});

cmd(
  {
    pattern: "ytmp3",
    react: "🎶",
    desc: "Download Song",
    category: "download",
    filename: __filename,
  },
  async (danuwa, mek, m, { q, from, reply }) => {
    try {
      if (!q) return reply("❌ *Please provide a song name or YouTube link*");

      const search = await yts(q);
      const data = search.videos[0];
      if (!data) return reply("❌ Song not found");

      const url = data.url;

      await danuwa.sendMessage(
        from,
        { image: { url: data.thumbnail }, caption: `🎬 *${data.title}*` },
        { quoted: mek }
      );

      const songData = await downloader.downloadSong(url);

      // send audio
      await danuwa.sendMessage(
        from,
        {
          audio: { url: songData.file },
          mimetype: "audio/mpeg",
        },
        { quoted: mek }
      );

    } catch (e) {
      console.log(e);
      reply(`❌ *Error:* ${e.message} 😞`);
    }
  }
);
