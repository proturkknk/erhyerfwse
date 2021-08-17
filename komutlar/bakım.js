const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => {
  let arg = args[0]
  let sebep = args.slice(2).join(" ")
  let açıklama = args[1]
let dreamcode = db.fetch(`dreamcode.botbakim`)
if(!arg) {
  message.reply('Bakım modunu açmak için !bakım aç yaz')
}

if(arg == 'kapat'){
message.channel.send(`Bot başarıyla bakım modundan çıkarıldı.`)
db.delete(`dreamcode.botbakim`)
db.delete(`afk_süre`);
}

if(arg == 'aç') {
  if(!açıklama){
    message.reply('Tahmini bitiş tarihini yaz.')
  }
  if(açıklama){
    if(!sebep){
      message.reply('Neden bakıma alıyorsun?')
    }
    if(sebep){
    db.set(`bakimyüzde`, açıklama)
      db.set(`bakimsebep`, sebep)
       db.set(`afk_süre`, Date.now());
message.channel.send(`Botu başarıyla bakıma aldınız, bakımdan çıkarmak için **+bakım kapat** yazınız.`)
db.set(`dreamcode.botbakim`, 'aktif')
  }
}
}
}
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [`bakım`],
permLevel: 4,
};

exports.help = {
name: 'bakım',
description: 'Botu bakıma alırsınız.',
usage: 'bakım'
};


