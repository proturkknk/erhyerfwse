const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('Bu komut şuan yapım aşamasında. Daha sonra tekrar deneyin. Tahmini bitiş tarihi: 02.07.2021')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage('https://media.giphy.com/media/TFCQtHTYpUk3YWkCZK/giphy.gif')
    return message.channel.send(matador);
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['SPAM-ENGEL','spam-engel','Spam-engel'],
  permLevel: 0
};

exports.help = {
  name: 'spam-engel',
  description: 'spam-engel.',
  usage: 'spam-engel'
};