const {MessageEmbed} = require("discord.js");
const bot = require("../bot.js");

exports.run = (client, message) => {
  if (!message.guild) {
    return message.author.send(``);
  }
  if (message.author.bot === true) {
    return;
  }
  if (!message.guild) {
    const motion = new MessageEmbed()
      .setColor('RANDOM')
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Bu komut Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed({embeds: [motion]});
  }
  if (message.channel.type !== "dm") {
    const motion = new MessageEmbed()
      .setAuthor("30 Ağustos Zafer Bayramı Kutlu Olsun!")
      .setColor('RANDOM')
      .setTimestamp()
      .setDescription("")
      .setImage(
        `https://media.giphy.com/media/R4mb4pUpRCTOT4NuBY/giphy.gif`
      );
    return message.channel.send({embeds: [motion]});
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Zaferbayramı','zaferbayramı','ZAFERBAYRAMI',],
  permLevel: 0
};

exports.help = {
  name: "zaferbayramı",
  description: "Zafer Bayramı",
  usage: "zaferbayramı"
};