const Discord = require('discord.js');

exports.run = function(client, message, args) {
  
  const alkış = new Discord.MessageEmbed()
  .setDescription("**Bravooo!!**")
  .setColor("#313131")
  .setImage("https://thumbs.gfycat.com/WarpedAdmiredCormorant-size_restricted.gif")

  message.channel.send(alkış);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Alkış','alkış',],
  permLevel: 0
};

exports.help = {
  name: 'alkış',
  description: 'Bot Alkışlar',
  usage: 'alkış'
  };
