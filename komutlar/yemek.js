const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('yemeğin tadı güzel mi? :) ')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/UnIlM9eoMwcOb89uk2/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yemek','Yemek','YEMEK'],
  permLevel: 0
};

exports.help = {
  name: 'yemek',
  description: 'yemek.',
  usage: 'yemek'
};