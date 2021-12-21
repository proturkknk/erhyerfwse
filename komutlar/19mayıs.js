const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const embed = new MessageEmbed()
    .setAuthor('19 Mayıs Atatürkü Anma Gençlik Ve Spor Bayramı Kutlu Olsun!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/JTDLcjTwIKpcEzsABn/giphy.gif`)
    return message.channel.send({embeds: [embed]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['19mayıs','19Mayıs','19MAYIS'],
  permLevel: 0
};

exports.help = {
  name: '19mayıs',
  description: '19mayıs.',
  usage: '19mayıs'
};