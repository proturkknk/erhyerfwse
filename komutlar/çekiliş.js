const Discord = require("discord.js");
const db = require("quick.db");
const use = require("useful-tools");
const moment = require("moment");
require("moment-duration-format");
const ms = require("parse-ms");

module.exports.run = async (client, message, args) => {
  let csc = message.channel;
  let cst2 = args[0];
  let csts = args[1];
  let csw = args.slice(2).join(" ");

  if (!cst2)
    return message.reply(
      "**Süreyi Belirtmen Gerek!\nÖrnek: `/çekiliş 10m 2w Nitro Hediyesi`**"
    );
  if (!csts)
    return message.reply(
      "**Kaç Kişi Kazanacak Yazman Gerek!\nÖrnek: `/çekiliş 10m 2w Nitro Hediyesi`**"
    );
  if (!csw)
    return message.reply(
      "**Ne Hediye Verilecek Yazman Gerek!\nÖrnek: `/çekiliş 10m 2w Nitro Hediyesi`**"
    );

  let x = message.content;
  let ise = x
    .split(" ")
    .filter(val => val.match(/\d+/))
    .map(x =>
      x
        .split("")
        .filter(val => val.match(/\d+/))
        .join("")
    );

  let sures;
  let cst1 = ise[0];
  let cstss = ise[1];
  if (cst2.includes("s")) sures = cst1 * 1000;
  if (cst2.includes("m")) sures = cst1 * 60 * 1000;
  if (cst2.includes("h")) sures = cst1 * 60 * 60 * 1000;
  if (cst2.includes("d")) sures = cst1 * 24 * 60 * 60 * 1000;

  let zaman = Date.now();

  let sure;
  let data = ms(sures);
  let s = data.seconds;
  let m = data.minutes;
  let h = data.hours;
  let d = data.days;
  if (s) {
    sure = `${s} Seconds`;
  }
  if (m) {
    sure = `${m} Minutes`;
  }
  if (h) {
    sure = `${h} Hours`;
  }
  if (d) {
    sure = `${d} Days`;
  }
  let vars = await db.get(`cekilis.${message.guild.id}_${message.channel.id}`);
  if (!vars) {
    let pixelien = new Discord.MessageEmbed()
      .setColor("#2c2f33")
      .setTitle(csw)
      .setTimestamp()
      .setFooter(cstss + "Kazanan").setDescription(`**🎉 Katılmak İçin Tıkla!
Süre: \`${sure}\`
Çekilişi yapan: ${message.author}**`);
    csc.send(pixelien).then(cs => {
      cs.react("🎉");

      db.set(`cekilis.${message.guild.id}_${csc.id}`, {
        kanalid: csc.id,
        mesajid: cs.id,
        hosted: message.author.id,
        sure: sures,
        zaman: zaman,
        toplam: cstss,
        odul: csw
      });
    });
  } else {
    message.reply("Zaten Bu Kanalda Aktif Bir Çekilis Var!");
  }
};
module.exports.conf = {
  aliases: []
};

module.exports.help = {
  name: "çekiliş"
};