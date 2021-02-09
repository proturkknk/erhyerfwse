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
`avatar` `+davet` `` `emojiler` `hata` `+havadurumu` `ipinfo` `+is` `+bildir` `+korona` `ping` `+saat` `+yapımcım` `+yetkilerim` `+sunucubilgi` 
)

 
  .addField("-eğlence (18)", 
herkesin kullanabileceği eğlence komutları;
`8ball` `atatürk` `aşkölçer` `balıktut` `duello` `dürüm` `efkar` `fbi` `meme` `piyango` `rastgelekullanıcı` `resim` `tost` `tersyazı` `wasted` `yazıtura` `yumruk` `öp` 
)
 


 
  .setFooter(Xaine | Tüm hakları saklıdır.`)

 
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
