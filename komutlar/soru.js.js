const Discord = require('discord.js');

const cevaplar = [
    "evet",
    "hayır",
    "belki",
    "olabilir",
    "daha sonra tekrar sor",
    "imkansız",
     "bilmiyorum",
      "asla",
      "tamam",
  "napim",
"sanane",
"neden?",
"tamam ama az sonra",
"yo ben değilim",
"dondurma yemek ister misin?",
"gel beraber yiyelim",
"oha gerçekten mi!?",
"oha",
"ayıp",
"tamam ama neden?",
"önemli değil",
"nefret ediyorum",
"nasılsın?",
"çok saçma cevaplar veriyorum bazen",
"alınma olur mu?",
"seni seviyorum",
"napim :D",
"ben bir botum"
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirtin. **Doğru Kullanım**: **{prefix}** konuş <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'xaine', 
  description: 'sihirli konuş komutu sorularınızı cevaplar',
  usage: 'xaine <soru>'
};