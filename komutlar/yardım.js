const Discord = require('discord.js');

exports.run = (client, message, args) => {
 const embed = new Discord.MessageEmbed()
 .setAuthor(`${client.user.username} Yardım Menüsüne Hoşgeldin!`,client.user.avatarURL())
 .setThumbnail(message.author.avatarURL())
 .setColor('RANDOM')
 .setDescription(`

 > \`+eğlence -> Eğlence Komutlarını gösterir.\`

 > \`+normal -> Normal Komutları gösterir.\`
 
 > \`+davet -> Botun Davetini ve Destek Sunucunu gösterir.\``)
 .setFooter(`Xaine Bot Yardım Menüsü `)
    .setTimestamp()
    .setImage("https://media.giphy.com/media/9CkIFgNLtPFAiiCqGN/giphy.gif")
message.channel.send(embed) 
//sharpen
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',   //Xaine bot yardım menüsü
  description: '',
  usage: ''
};