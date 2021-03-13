const Xaine = require('discord.js')
exports.run = (client, message,args) => {
 const bok = new Xaine.MessageEmbed()
 .setAuthor("Xaine", client.user.avatarURL)
  .setColor('BLACK')
  .setTitle("Xaine Bot") 
  .setDescription("[davet yazarak tüm davet linklerine ulaşabilirsiniz.](https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8%22)")
.addField("-Normal komutlar (20", '` avatar - davet - yılbaşı - nuke - hesapla - havadurumu - atatürk - is - bildir - korona - kilit - kilitaç - ping - saat - yapımcım - token - sunucubilgi - ekibimiz - mcskin - uyar - duyuru`')
  .addField("-eğlence komutları  (18)", '`xaine - atatürk - aşkölçer - balıktut - duello - efkarım - fbi - tersyazı - yazıtura - öp - aduketçek - ay - balık-tut - beşlik - dünya - ejderha-yazı - emojiyazı - espri - kartopu - kralol - slots - taksimdayı - tokat - yazı-tura - çıkma-teklifi - şekerye - düello - oylama - güneş - yıldız - kar - adamasmaca - stresçarkı - duygulandırıcı-söz - zarat - nsfw - gökyüzü - atatürk-sözleri - fal - boks-makinesi - şifre-oluştur - ağla - masketak - sevgili - asker - sayıtut - kolonya - kandil - komik - gol - iyikidoğdun - sarıl - yemek`')
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
  description: "Xaine V12 yardım", 
  usage: "yardım" 
}