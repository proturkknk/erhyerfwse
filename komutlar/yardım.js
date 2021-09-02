const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Bot Yardım Menüsüne Hoşgeldin!`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`
<:civcivkalp:853213881111150642> **Yeni Güncelleme!:** 3.6 güncellemesi yayımlandı! | Yardım menülerimize ve bazı komutlarımıza emojiler eklendi! | sa-as komutu tekrardan aktif hale getirildi!

<:civcivkalp:853213881111150642>  **Bugüne Özel Öne Çıkan Komut:** -  

 > \`+eğlence -> Eğlence Komutlarını gösterir.\`

> \`+moderasyon -> Moderasyon komutlarını gösterir.\`

 > \`+normal -> Normal Komutları gösterir.\`

 > \`+aldığımız-tedbirler -> Xaine Bot ve sizin için aldığımız tedbirleri gösterir.\`
 
 \`+seçmeli-oyunlar -> Seçmeli oyunlar yardım menüsünü gösterir.\`
 
 > \`+logo-yardım -> Logo yardım menüsünü gösterir.\`
 
  \`+gif-yardım -> Gif yardım menüsünü gösterir.\`
 
 > \`+davet -> Botla ilgili tüm linkleri gösterir.\`
 
  > \`+Bakımdaki-komutlar -> Botun bakımdaki komutlarını gösterir.\``)
 
 .setFooter(`Xaine Bot Yardım Menüsü `)
 .setFooter(`© 2020 Xaine Bot | Tüm hakları saklıdır`)
.addField(`Duyuru!`,`Hey selam! Ben Xaine | Destek sunucumuza gelmek ister misiniz? Çeşitli duyurular ve çekilişler buradan yapılıyor. Bot bir hata yaşadığında veya yenilik geldiğinde destek sunucusundan bildiriliyor. Ve sunucumuzda hergün yapılan çekilişler etkinlikler bile var. [Discord Sunucumuz](https://discord.gg/Kekc2pU)`)
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