   
const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join('');
if (mesaj.length < 1) return message.reply('> **Aktif olan yetkililer yetkilerinin başına.** <@&799560937753280512>**,** <@&799560951720050689>**.** ');
  
};  

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['y',],
  permLevel: 0   //// YETKİ GEREKMEZ KENDİNİZ AYARLAYIN.
};

exports.help = {
  name: 'yetkili',
  description: 'Yetkili çağırma komutu.',
  usage: '.yetkili'
};