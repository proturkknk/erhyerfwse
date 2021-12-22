const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('İyiki Doğdun <3 ')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/R1dWfIYh0yz7usnkVc/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['İYİKİ-DOĞDUN','İyikidoğdun','iyiki-doğdun','İyiki-doğdun','İYİKİDOĞDUN','iyikidoğdun'],
  permLevel: 0
};

exports.help = {
  name: 'iyikidoğdun',
  description: 'İyikidoğdun.',
  usage: 'iyikidoğdun'
};