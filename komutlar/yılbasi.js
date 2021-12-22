const {MessageEmbed} = require ("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2022-01-01 21:00:00");
  /*
  let zaman = ms(yilbasi - Date.now());

return message.channel.send(
    `:label: **Yılbaşının kutlanmasına Dair Bilgiler Aşağıda;** \n\n> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}** \n\n:white_check_mark: **Yılbaşının kutlanmasına Bu Kadar Zaman Kaldı!**`
  );
  */
  message.channel.send('Bu komut bir süreliğine devre dışıdır!')
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yılbaşı','Yılbaşı','YILBAŞI'],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "yılbaşı",

  description:
    "Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.",
  usage: ""
};