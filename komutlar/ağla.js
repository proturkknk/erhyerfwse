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
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send({embeds: [motion]});
  }
  if (message.channel.type !== "dm") {
    const motion = new MessageEmbed()
      .setAuthor("Bot Ağladı! :( Ama o hala mutlu <3 :)")
      .setColor('RANDOM')
      .setTimestamp()
      .setDescription("")
      .setImage(
        `https://media.giphy.com/media/ItEU0SMeoOr1XQqQz4/giphy.gif`
      );
    return message.channel.send({embeds: [motion]});
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