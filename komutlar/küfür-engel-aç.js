const Discord = require('discord.js');
const db = require('quick.db')
exports.run = (client, message, args) => { 
      if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısınız.`);
  if (db.fetch(`küfürE_${message.channel.id}`)) {
  return message.reply(`Sanırım bu özellik zaten açıkmış. :slight_smile:`)
}
  db.set(`küfürE_${message.channel.id}`, "aktif")
  message.reply(`Küfür engel başarıyla açıldı. Artık bundan sonra kimse küfür edemeyecek.`)
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['küfür-engel-aç','Küfür-engel-aç','KÜFÜR-ENGEL-AÇ'], 
  permLevel: 0
};

exports.help = {
  name: 'küfür-engel-aç',
  description: 'küfür-engel-aç', 
  usage: 'küfür-engel-aç'
};