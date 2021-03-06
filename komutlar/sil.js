const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = function(client, message, args) {
  
  if (!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
if(isNaN(args[0])) {
  var errembed = new MessageEmbed()
    .setColor("RANDOM")
    .addField(`Yanlış Kullanım!`, `Bir rakam yazmalısın!`)
    .addField(`Doğru Kullanım:`, `${ayarlar.prefix}sil <temizlenecek mesaj sayısı>`)
return message.channel.send({embeds: [errembed]});
}
  
if (args[0] < 1) return message.reply("**1** adetten az mesaj silemem!")
if (args[0] > 100) return message.reply("**100** adetten fazla mesaj silemem!")
  
message.channel.bulkDelete(args[0]).then(deletedMessages => {
if (deletedMessages.size < 1) return message.reply("Hiç mesaj silemedim! (**14** günden önceki mesajları silememe Discord izin vermiyor!)");
})
   
message.channel.send (`**${args[0]}** adet mesaj başarıyla silindi!`).then(m => m.delete({ timeout: 3000 }))

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil", "mesaj-sil", "mesajları-sil","Sil","SİL",],
  permLevel: `Mesajları yönet yetkisine sahip olmak gerekir.`
};

exports.help = {
  name: 'sil',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: '.sil <miktar>'
};
