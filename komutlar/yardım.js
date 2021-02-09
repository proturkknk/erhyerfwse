const Xaine = require('discord.js')

exports.run = (client, message,args) => {
const  = new message.channel.send.MessageEmbed()
 .setAuthor("Xaine", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("Xaine")                
 "+yardım", "ile yardım alabilirsiniz"
"Örnek komut kullanımı:" `+ping`
"Botu davet etmek için:" `+davet`
"Destek sunucusuna gelmek için:" `+davet`

    
 .addField("-moderatör (20", 
"Yetkililerin kullanabileceği komutlar;"
`uyar` `sunucukur`
)
  .addField("-komutlar (20", 
"herkesin kullanabileceği standart komutlar;"
`avatar` `davet` `` `yılbaşı` `hesapla` `+havadurumu` `atatürk` `+is` `+bildir` `+korona` `ping` `saat` `yapımcım` `token` `sunucubilgi`  `ekibimiz`  `korona`
)

 
  .addField("-eğlence (18)", 
"herkesin kullanabileceği eğlence komutları;"
`8ball` `atatürk` `aşkölçer` `balıktut` `duello`  `efkarım` `fbi` `resim` `tersyazı`  `yazıtura`  `öp` `aduketçek`  `ara155`  `ay`   `balık-tut`  `beşlik`  `dünya`  `ejderha-yazı` `emojiyazı`  `espri`  `kartopu`  `kralol`  `slots`  `taksimdayı`  `tokat`  `yazı-tura`  `çıkma-teklifi`  `şekerye`  `düello`  `çekiliş`  `oylama`  `güneş`  `yıldız`  `kar`  `adamasmaca`  `stresçarkı`  `duygulandırıcı-sözler`  `şifre`  `gifimiz`  `zarat`  `nsfw`  `gökyüzü`  `atatürk-sözleri`  `fal`  `boks-makinesi`  `şifre-oluştur`  `ağla`
)
 


 
  ".setFooter(Xaine Bot | Tüm hakları saklıdır.`)"

 
 message.channel.send(Xaine)

}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['ym'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "CodeWork V12  yardım ", 
  usage: "yardım" 
}
