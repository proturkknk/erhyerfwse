const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('İşte Kahraman Türk Askerleri! :flag_tr :flag_tr :flag_tr')
    .setColor('BLUE')
    .setTimestamp()
    .setDescription('https://media.giphy.com/media/bPBUwqv2gfQKFD0eLG/giphy.gif')
        .setImage(``)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ay','Ay','AY'],
  permLevel: 0
};

exports.help = {
  name: 'asker',
  description: 'asker.',
  usage: 'asker'
};