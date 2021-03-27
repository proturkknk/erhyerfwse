const Discord = require('discord.js')
exports.run = function(client, message, args) {//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let yardim = new Discord.MessageEmbed()
.setTitle("BEERCODE Ekonomi | Komut Listesi")//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.setColor("RANDOM")
.addField("__💰  Ekonomi__",`
**\`c!yardım ekonomi\`** - *Ekonomi komutları hakkında bilgi edinin!*

\`günlük\`, \`çalış\`, \`soygun\`, \`yatır\`, \`çek\`, \`gönder\`
`)//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.addField("__🎲  Oyunlar__",`
**\`c!yardım oyunlar\`** - *Eğlence/Bahis oyunları oynayarak para kazanın!*

\`balık-tut\`, \`bahis\`, \`slot-machine\`
`)

\`davet\`, \`yapımcım\`, \`destek\`,\`yardım\`

Ücretsiz Kodlar Sunduğumuz [__Discord Sunucumuza__](https://discord.gg/ew3dpTu4Z5) katılmayı unutmayın!
`)//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\

let ekonomi = new Discord.MessageEmbed()
.setTitle("__💰  Ekonomi Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`c!günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**
**\`c!para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**
**\`c!gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**
**\`c!soygun\` - __14 dakikada bir soygun yaparsınız.__**
**\`c!çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**
**\`c!yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**
**\`c!çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**
**\`c!çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**
[Destek Sunucumuza](https://discord.gg/ew3dpTu4Z5) katılmayı unutmayın
`)
let oyunlar = new Discord.MessageEmbed()
.setTitle("__🎲  Oyun Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`c!bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`c!slot-machine\` - __Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`c!balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 
`)//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let destek = new Discord.MessageEmbed()
.setTitle("__💼  Destek Komutları__")
.setColor("RANDOM")
.setDescription(`

`)
  if(!args[0]) return message.channel.send(yardim)
  
//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\  
  if(args[0] === 'ekonomi' || args[0] === 'economy') return message.channel.send(ekonomi)
  if(args[0] === 'oyunlar' || args[0] === 'oyun' || args[0] === 'games' || args[0] === 'game') return message.channel.send(oyunlar)
  if(args[0] === 'destek' || args[0] === 'support') return message.channel.send(destek)
  
  
};

//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
    enabled: true, 
    aliases: ["yardım-ekonomi","Yardım-ekonomi",'ekonomi','Ekonomi'],
  };
  
  exports.help = {
    name: 'ekonomi'
  };
//== BEERCODE (discord.gg/ew3dpTu4Z5) BEERCODE ==\\