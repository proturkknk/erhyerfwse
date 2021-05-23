const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('Bu komut şuan yapım aşamasında daha sonra tekrar deneyin. Tahmini bitiş tarihi: 24.05.2021')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kahve','Kahve','KAHVE'],
  permLevel: 0
};

exports.help = {
  name: 'kahve',
  description: 'kahve.',
  usage: 'kahve'
};