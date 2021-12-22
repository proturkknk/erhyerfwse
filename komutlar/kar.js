const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('İsteğiniz üzerine Kar yağışı gösteriliyor. ❄')
    .setColor('WHİTE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://www.hareketligifler.net/data/media/619/kar-hareketli-resim-0072.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Kar','Kar','Kar'],
  permLevel: 0
};

exports.help = {
  name: 'kar',
  description: 'Kar.',
  usage: 'Kar'
};