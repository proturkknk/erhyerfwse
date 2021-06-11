const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aktif') {
    db.set(`kufur_${message.guild.id}`, "acik")
    message.channel.send('Başarılı Şekilde `Aktif` Edildi.')
  return
}
if (args[0] === 'deaktif') {
  db.delete(`kufur_${message.guild.id}`)
message.channel.send('Başarılı Şekilde `küfür engel` kapatıldı.')
return
}
  message.channel.send('Lüten `Aktif` yada `kapat` Yazınız.')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür'],
 permLevel: 0
};

exports.help = {
 name: 'küfür-ayarla',
 description: 'Davet Log Kanalını Belirler',
 usage: 'davet-kanal-ayarla #kanal'
};