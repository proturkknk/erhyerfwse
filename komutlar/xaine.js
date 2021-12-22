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
"ben bir botum",
"Trefax benim sahibim",
  "Sen kimsin?",
  "Rastgele cevaplar veriyorum",
  "Seni sevdim",
  "Beni seviyor musun?",
  "Hey",
"Tanışabiliriz",
"Sahibim trefax ı tanıyor musunuz?",
  "Sihirli küreme soru sormak ister misiniz?",
   "selam",
  "Peki",
  "Beni seviyor musun?",
  "Seni çok seviyorum <3",
  "Beni beğeniyor musun?",
  "Sevindim",
  "Çok sıkıldım",
  "dın dın",
  "Kahvaltı yapar mısın benimle?",
  "sıkıldım biraz",
  "Sahibimi seviyorum <3",
  "çok iyi birine benziyorsun",
  "beraber gezellimi?",
  "tamam",
];

exports.run = function(client, message, args) {
    var soru = args.join(' ');

    var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];

    if(!soru) return message.reply('Bir soru belirtin. **Doğru Kullanım**: **{prefix}** xaine <soru>')
    else message.channel.send(cevap)

};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['xaine','Xaine','XAİNE'],
  permLevel: 0 
};

exports.help = {
  name: 'xaine', 
  description: 'sihirli konuş komutu sorularınızı cevaplar',
  usage: 'xaine <soru>'
};