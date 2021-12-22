const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('Hayırlı ramazanlar! ⛪')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/zEOGKLj9YnrwqeCw8G/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ramazan','Ramazan','RAMAZAN'],
  permLevel: 0
};

exports.help = {
  name: 'ramazan',
  description: 'ramazan.',
  usage: 'ramazan'
};