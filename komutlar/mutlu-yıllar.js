const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const codeworld = new MessageEmbed()
    .setAuthor('Mutlu yıllar!')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/Q5gYwgsTe2ixRthGO9/giphy.gif`)
    return message.channel.send({embeds: [codeworld]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['mutlu-yıllar','Mutlu-yıllar','MUTLU-YILLAR'],
  permLevel: 0
};

exports.help = {
  name: 'mutlu-yıllar',
  description: 'Mutlu-yıllar.',
  usage: 'mutlu-yıllar'
};