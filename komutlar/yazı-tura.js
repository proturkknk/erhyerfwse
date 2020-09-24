const Discord = require("discord.js");
const chancejs = require("chance");
const chance = new chancejs();

const cevaplar = ["**YAZI-TURA: __TURA__**", "**YAZI-TURA: __YAZI__**"];

exports.run = function(client, message) {

var pinkcode2 = cevaplar[Math.floor(Math.random() * cevaplar.length)];

if (pinkcode2 === "YAZI-TURA: __YAZI__**") {

const EmbedPinkCode = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(pinkcode2)
      .setThumbnail(
        "http://www.freakonomics.com/wp-content/uploads/2013/01/coin-300x218.jpg"
      );

return message.channel.send(EmbedPinkCode);

  } else if (pinkcode2 === "**YAZI-TURA: __TURA__**") {

    const EmbedPinkCode = new Discord.MessageEmbed()

      .setColor(0xf4b942)
      .setDescription(pinkcode2)
      .setThumbnail(
        "https://www.wallets-online.com/webadmin/items/ogon/ogon_cd_red_1.jpg"
      );

return message.channel.send(EmbedPinkCode);

  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yazıtura",
  description: "Yazı-Tura atar.",
  usage: "yazıtura"
};
