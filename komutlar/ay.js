const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('İsteğiniz üzerine ay gösteriliyor')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://tenor.com/view/moon-light-full-moon-gif-8036838.gif`)
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