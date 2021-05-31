const Discord = require ("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2021-06-05 15:30:00");
  let zaman = ms(yilbasi - Date.now());

return message.channel.send(
    `:label: **LGS ye kalan süre aşağıda yazmaktadır;** \n\n> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}** \n\n:white_check_mark: **LGS ye bu kadar süre kaldı. Başarılar!**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['lgs','lgs','lgs'],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "lgs",

  description:
    "Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.",
  usage: ""
};