const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor(' Gülümse çekiyorum! 📷 ')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/vu54y1Y4QRz4GouIWY/giphy.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['fotoğraf','Fotoğraf','FOTOĞRAF'],
  permLevel: 0
};

exports.help = {
  name: 'fotoğraf',
  description: 'fotoğraf.',
  usage: 'fotoğraf'
};