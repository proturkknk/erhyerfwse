const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    const matador = new Discord.MessageEmbed()
    .setAuthor('Bu komut şuan yapım aşamasında, daha sonra tekrar deneyin. Tahmini bitiş tarihi: 15.06.2021')
    .setColor('RANDOM')
    .setTimestamp()
    .setDescription('')
        .setImage(`https://media.giphy.com/media/TFCQtHTYpUk3YWkCZK/giphy.gif`)
    return message.channel.send(matador);
    };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['taş-kağıt-makas','Taş-kağıt-makas','taş-kağıt-makas','Tkm','TKM','tkm'],
  permLevel: 0
};

exports.help = {
  name: 'taş-kağıt-makas',
  description: 'taş-kağıt-makas.',
  usage: 'taş-kağıt-makas'
};
