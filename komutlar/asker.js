const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new MessageEmbed()
    .setAuthor('İşte Kahraman Türk Askerleri! /:flag_tr:')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/bPBUwqv2gfQKFD0eLG/giphy.gif`)
    return message.channel.send({embeds: [matador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ASKER','asker','Asker'],
  permLevel: 0
};
exports.help = {
  name: 'asker',
  description: 'asker.',
  usage: 'asker'
};