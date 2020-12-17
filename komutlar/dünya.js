const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const codeworld = new Discord.MessageEmbed()
    .setAuthor('İşte dünyamız')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/I2N4CwJGbHJ3TEb4u3/giphy.gif`)
    return message.channel.send(codeworld);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dünya','Dünya','DÜNYA'],
  permLevel: 0
};

exports.help = {
  name: 'dünya',
  description: 'Dünya.',
  usage: 'dünya'
};