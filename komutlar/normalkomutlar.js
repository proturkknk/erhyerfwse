const Xaine = require('discord.js')
exports.run = (client, message,args) => {
 const bok = new Xaine.MessageEmbed()
 .setAuthor("Xaine", client.user.avatarURL)
  .setColor('RANDOM')
  .setTitle("Xaine Bot") 
  .setDescription("[davet yazarak tüm davet linklerine ulaşabilirsiniz.](https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8%22)")
.addField("-Normal komutlar (22)", ' avatar - davet - yılbaşı - hesapla - havadurumu -  bildir - korona - ping - istatistik -  saat - yapımcım - token - sunucubilgi - ekibimiz - mcskin - uyar - duyuru - sözlük - kuruluş-tarihi - destek-ekibi - toplam-komut - çekiliş - hatırlatıcı')
 .setImage("https://media.giphy.com/media/9CkIFgNLtPFAiiCqGN/giphy.gif")
message.channel.send(bok)
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['normal','normalkomutlar','Normal','Normalkomutlar','NORMALKOMUTLAR','NORMAL'], 
  permLevel: 0 
} 
exports.help = {
  name: "normal", 
  description: "Xaine Bot v12 Normal Yardım Menüsü", 
  usage: "normal" 
}