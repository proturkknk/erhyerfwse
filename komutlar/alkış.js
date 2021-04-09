const Discord = require('discord.js');

exports.run = function(client, message, args) {
  
  const alkış = new Discord.MessageEmbed()
  .setDescription("**BRAVOOO!!!**")
  .setColor("RANDOM")
  .setImage("https://media.giphy.com/media/dKXjvcJU9pPEKnWufl/giphy.gif")

  message.channel.send(alkış);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Alkış','alkış','ALKIŞ'],
  permLevel: 0
};

exports.help = {
  name: 'alkış',
  description: 'Bot Alkışlar',
  usage: 'alkış'
  };
