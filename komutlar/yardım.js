const {MessageEmbed} = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new MessageEmbed()
 .setAuthor(`${client.user.username} Bot Yardım Menüsüne Hoşgeldin!`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
.setDescription(`
<:civcivkalp:853213881111150642>  davet yazarak botla ilgili tüm linklere ulaşabilirsiniz.

Kullanılan Xaine Bot sürümü: **3.9**
Sezon: ** 2. Sezon Kış Sezonu ❄️ **

BİLGİLENDİRME: Botumuz v13 sürümüne geçtiği için bazı Komutlar çalışmıyor. Bugün(22 Aralık 2021) geceye kadar sorun düzelecek. Anlayışınız için teşekkür ederiz. Gelişmelerden haberdar olmak için Destek sunucumuza gelebilirsiniz.

---------------  **⭐ Yeni güncellemeler-düzeltmeler!** ---------------

**bilgilendirme** Komutu eklendi! Artık Xaine Bot hakkında tüm bilgilendirmeleri görebilirsiniz.

Botdaki bildirilen ve belirlenen tüm yazım yanlışları düzeltildi! Bildiren kullanıcılarımıza teşekkür ederiz.

**VIP Üye Sistemi** Çok yakında geliyor!

**Daha fazlası için Destek sunucumuza gelebilirsiniz!**

<:civcivkalp:853213881111150642>  Bugüne Özel Öne Çıkan Komut: **kar** 

 > :partying_face: | +eğlence -> Eğlence Komutlarını gösterir.

> :tools: | +moderasyon -> Moderasyon komutlarını gösterir.

 > ⭐ | +normal -> Normal Komutları gösterir.

> :gear: | +ayarlamalı-komutlar -> Ayarlamalı komutları gösterir.

 > :man_police_officer: | +aldığımız-tedbirler -> Xaine Bot ve sizin için aldığımız tedbirleri gösterir.
 
 > ⭐ | +seçmeli-oyunlar -> Seçmeli oyunlar yardım menüsünü gösterir.
 
 > :ringed_planet: | +logo-yardım -> Logo yardım menüsünü gösterir.
 
 > :rosette: | +gif-yardım -> Gif yardım menüsünü gösterir.
 
 > :tickets: | +davet -> Botla ilgili tüm linkleri gösterir.

 > :pencil:  | +bilgilendirme -> Xaine Bot hakkındaki tüm bilgilendirmeleri gösterir.
 
  > :wrench: | +Bakımdaki-komutlar -> Botun bakımdaki komutlarını gösterir.`)
 
 .setFooter(`Xaine Bot Yardım Menüsü `)
.addField("Bağlantılar","[Davet et](https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8)\n[Destek sunucusu](https://discord.gg/99C4tGzgK4)\n[Oy verme linki](https://top.gg/bot/774235071653216286/vote)")
 .setFooter(`© 2020 Xaine Bot | Tüm hakları saklıdır`)
.addField(`Duyuru!`,`Hey selam! Ben Xaine | Destek sunucumuza katılmak ister misiniz? Destek sunucumuzda çekilişler, bot hakkında duyurular ve güncellemeleri öğrenebilirsiniz! Katılmak isterseniz üsteki **bağlantılar** bölümünden **Destek sunucusu** yazan yere tıklayabilirsiniz.`)
    .setTimestamp()
    .setImage("https://media.giphy.com/media/rZ3NPLjVRjAtLnwphZ/giphy.gif?cid=790b761116ac64a6f9e3add97dfb3c8126c68b94170377aa&rid=giphy.gif&ct=g")
message.channel.send({embeds: [embed]}) 
//sharpen
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','Yardım','YARDIM'],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   //Xaine bot yardım menüsü
  description: '',
  usage: ''
};