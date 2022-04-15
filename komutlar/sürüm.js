const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Şuanda kullanılan Elitra Bot sürümü: 4.3")
    
  message.channel.send({embeds: [rexus]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sürüm','Sürüm','SÜRÜM',],
  permLevel: 0
};

exports.help = {
  name: "sürüm",
  description: "",
  usage: ""
};