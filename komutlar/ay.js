const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('İsteğiniz üzerine ay gösteriliyor')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.tenor.co/videos/8c37901232ba9c604a98ed0a3668b868/mp4 `)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ay','Ay','AY'],
  permLevel: 0
};

exports.help = {
  name: 'ay',
  description: 'ay.',
  usage: 'ay'
};