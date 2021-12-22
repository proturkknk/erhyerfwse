const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('Dışarı çıkarken sağlınız için maske takmayı unutmayın. 😷 ')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/ZmZWYiOd2VCpgHk0dG/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['maskenitak','maske','masketak','Maske','MASKE'],
  permLevel: 0
};

exports.help = {
  name: 'masketak',
  description: 'masketak.',
  usage: 'masketak'
};