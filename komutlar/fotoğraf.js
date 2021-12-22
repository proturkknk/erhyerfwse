const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor(' Gülümseyin çekiyorum! 📷 ')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/vu54y1Y4QRz4GouIWY/giphy.gif`)
    .setFooter('Xaine Bot Fotoğraf Komutu')
    return message.channel.send({embeds: [matador]});
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