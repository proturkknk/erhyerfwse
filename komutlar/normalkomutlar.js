const {MessageEmbed} = require('discord.js')
exports.run = (client, message,args) => {
 const bok = new MessageEmbed()
 .setAuthor("Xaine", client.user.avatarURL)
  .setColor('RANDOM')
  .setTitle("Xaine Bot") 
  .setDescription("[ <:civcivkalp:853213881111150642>  davet yazarak tüm botla ilgili  linklere ulaşabilirsiniz. Yada buraya tıklayarak botu davet edebilirsiniz.](https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8)")
.addField("-Normal komutlar (24)", ' avatar - sürüm - çeviri - kullanıcı-bilgi - bot-bilgi - roblox-oyuncu-bilgi - steam-oyun - davet - Atatürk-sözleri - duygulandırıcı-sözler - yılbaşı - hesapla - hava-durumu -  bildir - korona - ping - istatistik -  saat - yapımcım - token - sunucubilgi - sunucukur - ekibimiz - mcskin - duyuru - sözlük - kuruluş-tarihi - destek-ekibi - toplam-komut - çekiliş(bakımda) - hatırlatıcı - yetkilerim - iftar - yenilikler')
 .setImage("https://media.giphy.com/media/YKqCL6KfuCJOdh2d8p/giphy.gif")
message.channel.send({embeds: [bok]})
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['normal','normalkomutlar','Normal','Normalkomutlar','NORMALKOMUTLAR','NORMAL'], 
  permLevel: 0 
} 
exports.help = {
  name: "normal", 
  description: "Xaine Bot v13 Normal Yardım Menüsü", 
  usage: "normal" 
}