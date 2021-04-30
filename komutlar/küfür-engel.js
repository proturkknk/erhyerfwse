const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
  if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullanabilmeniz İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısınız!`)
if(args[0] === 'aç') {
    db.set(`${message.guild.id}.kufur`, true)
    message.channel.send(`Küfür engel başarıyla aktif edildi.`)
  return
}
if (args[0] === 'kapat') {
  db.delete(`${message.guild.id}.kufur`)
message.channel.send(`Küfür engel başarıyla kapatıldı.`)
return
}
  message.channel.send('Lütfen açmak istiyorsanız **aç** kapatmak istiyorsanız **kapat** yazınız. Örnek Kullanım: **küfür-engel aç/kapat**')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür-engel','Küfür-engel','KÜFÜR-ENGEL'], 
 permLevel: 0
};

exports.help = {
 name: 'küfür-engel',
 description: 'küfürleri engeller Xaine Bot',
 usage: 'küfür-engel'
};