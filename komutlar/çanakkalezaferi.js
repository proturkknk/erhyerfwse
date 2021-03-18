const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('18 Mart Çanakkale Zaferi! Tüm şehitlerimize ALLAH Tan Rahmet Diliyoruz. :)')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/WzWyWqRZjqtZG6X8Wf/giphy.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çanakkalezaferi','Çanakkalezaferi','çanakkale-zaferi'],
  permLevel: 0
};

exports.help = {
  name: 'çanakkalezaferi',
  description: 'çanakkalezaferi.',
  usage: 'çanakkalezaferi'
};