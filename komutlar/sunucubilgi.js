const {MessageEmbed} = require("discord.js");
const ayarlar = require('../ayarlar.json');

module.exports.run = async (bot, message, args, user) => {

  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
  let sicon = message.guild.iconURL;
  let owner = await message.guild.fetchOwner()
  
   let serverembed = new MessageEmbed()
   
   .setAuthor('Sunucu bilgisi')
   
   .setColor("RANDOM")
  
   .setThumbnail(message.guild.iconURL)
   .addField('Sunucu Adı',message.guild.name, true)
   .addField("Sunucu İd", message.guild.id, true)
   .addField("Sunucu Sahibi", owner.user.username+"#"+owner.user.discriminator, true)
   .addField("Üyeler", message.guild.memberCount.toString(), true)
   .addField("Kanallar", message.guild.channels.cache.size.toString(), true)
   .addField("Roller", message.guild.roles.cache.size.toString(), true)
   
   message.channel.send({embeds: [serverembed]});

}

exports.conf = {
  enabled: true, 
  guildOnly: false,
  aliases: ['sunucu-bilgi','sbilgi','s-bilgi','Sunucu-bilgi','SUNUCU-BİLGİ'], 
  permLevel: 0 
};

exports.help = {
  name: 'sunucubilgi', 
  description: 'Sunucu hakkında bilgi verir.',
  usage: 'sunucubilgi' 
};