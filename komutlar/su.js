const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('İsteğiniz üzerine su gösteriliyor. Su Hayattır! :) ❄')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/3o85xmkd9rn9p17DAQ/giphy.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Su','Su','Su'],
  permLevel: 0
};

exports.help = {
  name: 'su',
  description: 'Su.',
  usage: 'Su'
};