const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('Ne tatlı sevgililer. 😍')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/2hpqBX8LcDf7tC50St/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['SEVGİLİ','Sevgili','sevgili'],
  permLevel: 0
};

exports.help = {
  name: 'sevgili',
  description: 'sevgili.',
  usage: 'sevgili'
};