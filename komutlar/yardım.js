const Xaine = require('discord.js')

exports.run = (client, message,args) => {
 const bok = new Xaine.MessageEmbed()
 .setAuthor("Xaine", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("Xaine") 
  .setDescription("[davet yazarak tüm davet linklerine ulaşabilirsiniz.](https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8%22)")
.addField("-Normal komutlar (20", '` avatar - davet - yılbaşı - hesapla - havadurumu - atatürk - is - bildir - korona - ping - saat - yapımcım - token - sunucubilgi - ekibimiz -mcskin`')
  .addField("-eğlence komutları (18)", '`8ball - atatürk - aşkölçer - balıktut - duello - efkarım - fbi - tersyazı - yazıtura - öp - aduketçek - ay - balık-tut - beşlik - dünya - ejderha-yazı - emojiyazı - espri - kartopu - kralol - slots - taksimdayı - tokat - yazı-tura - çıkma-teklifi - şekerye - düello - çekiliş - oylama - güneş - yıldız - kar - adamasmaca - stresçarkı - duygulandırıcı-söz - şifre - gifimiz - zarat - nsfw - gökyüzü - atatürk-sözleri - fal - boks-makinesi - şifre-oluştur - ağla - masketak - sevgili - asker - sayıtut - kolonya - kandil`')
 .setImage(`https://media.giphy.com/media/UDjA5NF3NAlKdHnOQG/giphy.gif`)

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
  description: "Xaine V12  yardım ", 
  usage: "yardım" 
}