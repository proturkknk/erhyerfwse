const codework = require('discord.js')

exports.run = (client, message,args) => {
 const codework1 = new codework.MessageEmbed()
 .setAuthor("Xaine", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("Xaine") 
 .setURL(https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8 
  .setDescription(
                  
 **+yardım**, ile yardım alabilirsiniz.
Örnek komut kullanımı: \-ping`
Botu davet etmek için: `-davet`
)
                  
  .addField("-komutlar (20", 
herkesin kullanabileceği standart komutlar;
`avatar` `+davet` `` `yılbaşı` `hesapla` `+havadurumu` `atatürk` `+is` `+bildir` `+korona` `ping` `+saat` `+yapımcım` `token` `+sunucubilgi`  `ekibimiz`  `korona`
)

 
  .addField("-eğlence (18)", 
herkesin kullanabileceği eğlence komutları;
`8ball` `atatürk` `aşkölçer` `balıktut` `duello`  `efkarım` `fbi` `resim` `tersyazı`  `yazıtura`  `öp` `aduketçek`  `ara155`  `ay`   `balık-tut`  `beşlik`  `dünya`  `ejderha-yazı` `emojiyazı`  `espri`  `kartopu`  `kralol`  `slots`  `taksimdayı`  `tokat`  `yazı-tura`  `çıkma-teklifi`  `şekerye`  `düello`  `çekiliş`  `oylama`  `güneş`  `yıldız`  `kar`  `adamasmaca`  `stresçarkı`  ``  ``
)
 


 
  .setFooter(Xaine Bot | Tüm hakları saklıdır.`)

 
 message.channel.send(codework1)

}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['ym'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "Xainon V12  yardım ", 
  usage: "yardım" 
}
