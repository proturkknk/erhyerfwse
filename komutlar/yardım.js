const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Bot Yardım Menüsüne Hoşgeldin!`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
.setDescription(`
<:civcivkalp:853213881111150642>  davet yazarak tüm botla ilgili linklere ulaşabilirsiniz.

**Şuanki kullanılan Xaine Bot sürümü:** 3.6

---------------  **⭐ Yeni güncellemeler!** ---------------

** sa-as ** komutu tekrardan aktif!
**Daha fazlası için Destek sunucumuza gelebilirsiniz!**

<:civcivkalp:853213881111150642>  **Bugüne Özel Öne Çıkan Komut:** -  

 > :partying_face: | +eğlence -> Eğlence Komutlarını gösterir.

> :tools: | +moderasyon -> Moderasyon komutlarını gösterir.

 > ⭐ | +normal -> Normal Komutları gösterir.

> :gear: | +ayarlamalı-komutlar -> Ayarlamalı komutları gösterir.

 > :man_police_officer: | +aldığımız-tedbirler -> Xaine Bot ve sizin için aldığımız tedbirleri gösterir.
 
 > ⭐ | +seçmeli-oyunlar -> Seçmeli oyunlar yardım menüsünü gösterir.
 
 > :ringed_planet: | +logo-yardım -> Logo yardım menüsünü gösterir.
 
 > :rosette: | +gif-yardım -> Gif yardım menüsünü gösterir.
 
 > :tickets: | +davet -> Botla ilgili tüm linkleri gösterir.
 
  > :wrench: | +Bakımdaki-komutlar -> Botun bakımdaki komutlarını gösterir.`)
 
 .setFooter(`Xaine Bot Yardım Menüsü `)
.addField("Bağlantılar","[Davet et](https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8)\n[Destek sunucusu](https://discord.gg/99C4tGzgK4)\n[Oy verme linki](https://top.gg/bot/774235071653216286/vote)")
 .setFooter(`© 2020 Xaine Bot | Tüm hakları saklıdır`)
.addField(`Duyuru!`,`Hey selam! Ben Xaine | Destek sunucumuza katılmak ister misiniz? Destek sunucumuzda çekilişler, bot hakkında duyurular ve güncellemeleri öğrenebilirsiniz! Katılmak isterseniz üsteki **bağlantılar** bölümünden **Destek sunucusu** yazan yere tıklayabilirsiniz.`)
    .setTimestamp()
    .setImage("https://media.giphy.com/media/YKqCL6KfuCJOdh2d8p/giphy.gif")
message.channel.send(embed) 
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