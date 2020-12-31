const Discord = require ("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");
const moment = require('moment-timezone')

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2020-12-31 24:00:00");
  const day = moment().tz('Turkey').format('DD')

return message.channel.send(
    `:label: **Yılbaşının kutlanmasına Dair Bilgiler Aşağıda;** \n\n> Gün: **${day}** \n> Saat: **${day}** \n> Dakika: **${day}** \n\n:white_check_mark: **Yılbaşının kutlanmasına Bu Kadar Zaman Kaldı! Mutlu Yıllar!
    2021 Hoşgeldin!...**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "yılbaşı",

  description:
    "Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.",
  usage: ""
};