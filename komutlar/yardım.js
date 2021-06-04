const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsüne Hoşgeldin!`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`

 > \`+eğlence -> Eğlence Komutlarını gösterir.\`

> \`+moderasyon -> Moderasyon komutlarını gösterir.\`

 > \`+normal -> Normal Komutları gösterir.\`
 
 \`+seçmeli-oyunlar -> Seçmeli oyunlar yardım menüsünü gösterir.\`
 
 > \`+logo-yardım -> Logo yardım menüsünü gösterir.\`
 
  \`+gif-yardım -> Gif yardım menüsünü gösterir.\`
 
 > \`+davet -> Botun Davetini ve Destek Sunucunu gösterir.\`
 
  > \`+Bakımdaki-komutlar -> Botun bakımdaki komutlarını gösterir.\``)
 
 .setFooter(`Xaine Bot Yardım Menüsü `)
 .setFooter(`© 2020 Xaine Bot | Tüm hakları saklıdır`)
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