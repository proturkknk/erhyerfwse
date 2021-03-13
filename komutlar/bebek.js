const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('İsteğiniz üzerine bebek gösteriliyor. :) Çok tatlı değil mi yaa :heart:')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/kyHb4nzYScnmtqyJYu/giphy.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bebek','Bebek','BEBEK'],
  permLevel: 0
};

exports.help = {
  name: 'bebek',
  description: 'bebek.',
  usage: 'bebek'
};