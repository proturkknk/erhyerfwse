const {MessageEmbed} = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new MessageEmbed()
 .setAuthor(`${client.user.username} Bot Yardım Menüsüne Hoşgeldin!`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
.setDescription(`
<:civcivkalp:853213881111150642>  davet yazarak botla ilgili tüm linklere ulaşabilirsiniz.

Kullanılan Elitra Bot sürümü: **4.3**
Sezon: ** İlkbahar Sezonu 🌺 **

---------------  **⭐ Yeni güncellemeler-düzeltmeler!** ---------------

**iftar-zamanı** Komutu kullanıma açıldı! 

**Slash (/)** Komutları Yapım Çalışması Tamamlandı! Artık / (Slash) simgesiyle Bazı Komutlarımız Hakkında Bilgi Edinebilirsiniz.

**VIP Üye Sistemi** Çok yakında geliyor!

**Daha fazlası için Destek sunucumuza gelebilirsiniz!**

<:civcivkalp:853213881111150642>  Bugüne Özel Öne Çıkan Komut: **yılbaşı - kar - mutlu-yıllar** 

 > :partying_face: | +eğlence -> Eğlence Komutlarını gösterir.

> :tools: | +moderasyon -> Moderasyon komutlarını gösterir.

 > ⭐ | +normal -> Normal Komutları gösterir.

> :gear: | +ayarlamalı-komutlar -> Ayarlamalı komutları gösterir.

 > :man_police_officer: | +aldığımız-tedbirler -> Xaine Bot ve sizin için aldığımız tedbirleri gösterir.
 
 > ⭐ | +seçmeli-oyunlar -> Seçmeli oyunlar yardım menüsünü gösterir.
 
 > :ringed_planet: | +logo-yardım -> Logo yardım menüsünü gösterir.
 
 > :rosette: | +gif-yardım -> Gif yardım menüsünü gösterir.
 
 > :tickets: | +davet -> Botla ilgili tüm linkleri gösterir.

 > :pencil:  | +bilgilendirme -> Fleix Bot hakkındaki tüm bilgilendirmeleri gösterir.
 
  > :wrench: | +Bakımdaki-komutlar -> Botun bakımdaki komutlarını gösterir.`)
 
 .setFooter(`Elitra Bot Yardım Menüsü `)
.addField("Bağlantılar","[Davet et](https://discord.com/oauth2/authorize?client_id=955104024619794472&scope=bot&permissions=27648860222)\n[Destek sunucusu](https://discord.gg/99C4tGzgK4)\n[Oy verme linki](https://top.gg/bot/774235071653216286/vote)")
 .setFooter(`© 2020 Elitra Bot | Tüm hakları saklıdır`)
 .setTimestamp()
    .setImage("https://media.giphy.com/media/BTQg35NV1TFyP03vGu/giphy.gif")
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
  name: 'yardım',   //Elitra bot yardım menüsü
  description: '',
  usage: ''
};