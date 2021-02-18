const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('Kandiliniz Mübarek Olsun. :) <3 🤲 ')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/RL3OxE3e6aijWo0Vz2/giphy.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kandil','Kandil','KANDİL'],
  permLevel: 0
};

exports.help = {
  name: 'kandil',
  description: 'kandil.',
  usage: 'kandil'
};