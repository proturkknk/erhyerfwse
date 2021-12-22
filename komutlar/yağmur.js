const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('İsteğiniz üzerine yağmur yağışı gösteriliyor. ☔️ ')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/IIlQlxQIOY8P6qAQbV/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Yağmur','YAĞMUR','yağmur'],
  permLevel: 0
};

exports.help = {
  name: 'yağmur',
  description: 'yağmur.',
  usage: 'yağmur'
};