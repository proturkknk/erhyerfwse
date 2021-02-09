const Xaine = require('discord.js')

exports.run = (client, message,args) => {
 const bok = new Xaine.MessageEmbed()
 .setAuthor("Xaine", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("Xaine") 
  .setDescription("[ekleme linki](https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8%22)")

 .addField("-moderatör (20", " Yetkililerin kullanabileceği komutlar;")
.addField("-komutlar (20", '` avatar `davet` `yılbaşı hesapla +havadurumu atatürk +is +bildir +korona ping saat yapımcım token sunucubilgi  ekibimiz  korona`')

 
  .addField("-eğlence (18)", '8ball atatürk aşkölçer balıktut duello  efkarım fbi resim tersyazı  yazıtura  öp aduketçek  ara155  ay   balık-tut  beşlik  dünya  ejderha-yazı emojiyazı  espri  kartopu  kralol  slots  taksimdayı  tokat  yazı-tura  çıkma-teklifi  şekerye  düello  çekiliş  oylama  güneş  yıldız  kar  adamasmaca  stresçarkı  duygulandırıcı-sözler  şifre  gifimiz  zarat  nsfw  gökyüzü  atatürk-sözleri  fal  boks-makinesi  şifre-oluştur  ağla`')
 

message.channel.send(bok)
}
exports.conf = {
  enable: true, 
  guildOnly: false, 
  aliases: ['ym','Yardım','yardım','Yardim','yardim','Ym'], 
  permLevel: 0 
} 
exports.help = {
  name: "yardım", 
  description: "CodeWork V12  yardım ", 
  usage: "yardım" 
}