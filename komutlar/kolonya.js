const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('Getirin elinizi kolonya dökelim. :)')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/SdxAuxpXZf9yNMvASS/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kolonya','Kolonya','KOLONYA'],
  permLevel: 0
};

exports.help = {
  name: 'kolonya',
  description: 'kolonya.',
  usage: 'kolonya'
};