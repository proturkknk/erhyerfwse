const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('19 Mayıs Atatürkü Anma Gençlik Ve Spor Bayramı Kutlu Olsun!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(``)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['19mayıs','19Mayıs','19MAYIS'],
  permLevel: 0
};

exports.help = {
  name: '19mayıs',
  description: '19 Mayıs Atatürkü Anma Gençlik Ve Spor Bayramı.',
  usage: '19mayıs'
};