const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setDescription("Şuanda kullanılan Xaine Bot sürümü: 3.6")
    
  message.channel.send(rexus);
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