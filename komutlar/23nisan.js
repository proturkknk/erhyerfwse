const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('23 Nisan Ulusal Egemenlik Ve Çocuk Bayramı Kutlu Olsun! ')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/ohURfnxIDqCa49jZ2p/giphy.gif`)
    return message.channel.send(matador);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['23nisan','23nisan','23NİSAN'],
  permLevel: 0
};

exports.help = {
  name: '23nisan',
  description: '23nisan.',
  usage: '23nisan'
};