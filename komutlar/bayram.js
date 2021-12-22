const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('İyi bayramlar! 🍬')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/GmPcTlXQY11w83nwLf/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bayram','Bayram','BAYRAM'],
  permLevel: 0
};

exports.help = {
  name: 'bayram',
  description: 'bayram.',
  usage: 'bayram'
};