const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('İsteğiniz üzerine gökyüzü gösteriliyor. Çok iyi değil mi? 😍 🌙 ★')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/QZfrZbmNhKA5grghoV/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Gözyüzü','Gökyüzü','Gökyüzü'],
  permLevel: 0
};

exports.help = {
  name: 'gökyüzü',
  description: 'gökyüzü.',
  usage: 'gökyüzü'
};