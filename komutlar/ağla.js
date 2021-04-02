const Discord = require("discord.js");
const bot = require("../bot.js");

exports.run = (client, message) => {
  if (!message.guild) {
    return message.author.send(``);
  }
  if (message.author.bot === true) {
    return;
  }
  if (!message.guild) {
    const motion = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed(motion);
  }
  if (message.channel.type !== "dm") {
    const motion = new Discord.MessageEmbed()
      .setAuthor("Bot Ağladı Bence özür dile. :(")
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setImage(
        `https://media.giphy.com/media/ItEU0SMeoOr1XQqQz4/giphy.gif`
      );
    return message.channel.send(motion);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Ağla','ağla','AĞLA',],
  permLevel: 0
};

exports.help = {
  name: "ağla",
  description: "Botu Ağlatırsınız.",
  usage: "ağla"
};