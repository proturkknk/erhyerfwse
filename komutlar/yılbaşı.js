const Discord = require ("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2022-02-01 21:03:00");
  let zaman = ms(yilbasi - Date.now());

return message.channel.send(
    `:label: **Yılbaşının kutlanmasına Dair Bilgiler Aşağıda;** \n\n> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}** \n\n:white_check_mark: **Yılbaşının kutlanmasına Bu Kadar Zaman Kaldı!**`
  );
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