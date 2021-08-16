const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('İsteğiniz üzerine yıldızlar gösteriliyor.  💫')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/RHIKETUlUINYvV7CAO/giphy.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yıldız','Yıldız','YILDIZ'],
  permLevel: 0
};

exports.help = {
  name: 'yıldız',
  description: 'yıldız.',
  usage: 'yıldız'
};

