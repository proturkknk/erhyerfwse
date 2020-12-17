const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('İsteğiniz üzerine ay gösteriliyor')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/kyHb4nzYScnmtqyJYu/giphy.gif`)
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