const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('İsteğiniz üzerine Güneş gösteriliyor. ☀️')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://www.hareketligifler.net/data/media/278/gunes-hareketli-resim-0717.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Güneş','Güneş','Güneş'],
  permLevel: 0
};

exports.help = {
  name: 'güneş',
  description: 'güneş.',
  usage: 'güneş'
};