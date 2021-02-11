const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('Dışarı çıkarken sağlınız için maske takmayı unutmayın.')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://tenor.com/bgkzV.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['maskenitak','maske','masketak'],
  permLevel: 0
};

exports.help = {
  name: 'masketak',
  description: 'masketak.',
  usage: 'masketak'
};