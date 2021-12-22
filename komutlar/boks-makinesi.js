const {MessageEmbed} = require('discord.js');
exports.run = (client, message, args) => {
  
 var boksmakinesi = ['Boks Makinesi Sonucu ・ **3000 Boks Makinesi Kırıldı!** !', 
                 'Boks Makinesi Sonucu ・ **100 Çook Yavaş Vurdun. Daha iyisini yapabilirsin!**', 
                 'Boks Makinesi Sonucu ・ **900 Eh İşte **', 
                 'Boks Makinesi Sonucu ・ **1000 İyi**',
                 'Boks Makinesi Sonucu ・ **50  Bune Çooook Yavaş! Daha iyisini yapabilirsin!**', 
                 'Boks Makinesi Sonucu ・ **2000 Çok İyi!**', 
                 'Boks Makinesi Sonucu ・ **700 Daha İyisini Yapabilirsin.**',
                 'Boks Makinesi Sonucu ・ **500 Yanii Daha İyisini Yapabilirsin**', 
                 'Boks Makinesi Sonucu ・ **999 | 1 Puanla Kaçırdın Be.**', 
                 'Boks Makinesi Sonucu ・ **1100 Fena Değil**', 
                 'Boks Makinesi Sonucu ・ **1300 ** Çok güzel vurdun! Ama daha iyisini yapabilirsin.',
                 'Boks Makinesi Sonucu ・ **1500, ** Çok iyi vurdun! Nerdeyse boks makinesi devrilicekti. Tebrik ederiz! '
                ];
 var cevap = boksmakinesi[Math.floor(Math.random() * boksmakinesi.length)];
  
 const gamerwolf = new MessageEmbed()
 .setColor(`RANDOM`)
 .setDescription(":boxing_glove: " + cevap)
 .setImage('https://media.giphy.com/media/Rl4yxxVEvUge8b5mkW/giphy.gif')
message.channel.send({embeds: [gamerwolf]})
  
  
};

exports.conf = {
   aliases: ['boks-makinesi','BOKS-MAKİNESİ','Boks-makinesi']
 };

 exports.help = {
   name: 'boks-makinesi',
   description: ' Boks Makinesi Komudu'
 }