   
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join('');
if (mesaj.length < 1) return message.reply('> **Yetkili çağırdım, aktiflerse birazdan burda olurlar.** <@696365117063036986>**** <@459377860012933121>**** ');
  
};  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y',],
  permLevel: 0   //// YETKİ GEREKMEZ KENDİNİZ AYARLAYIN.
};

exports.help = {
  name: 'yetkili-çağır',
  description: 'Yetkili çağırma komutu.',
  usage: '.yetkili-çağır'
};