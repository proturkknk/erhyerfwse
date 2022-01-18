const {MessageEmbed} = require("discord.js");
exports.run = async (client, message, args) => {

  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Bildirmek istedinizi bildirmek için: +bildir (Şikayet - Hata bildirimi - Öneri - Vb.)** Örnek: +bildir balık-tut komutunda hata var.')

const embed = new MessageEmbed()
.setTitle("Xaine Bot Bildirme Sistemi")
.setColor('RANDOM')
.setDescription(`**Bug Kanalı** ${message.channel.name} \n **Bug Bildirilen Sunucu** \`${message.guild.name}\` \n **Bugu Bildiren Kullanıcı** <@${message.author.id}> \n **Bildirilen Bug :** \`${istek}\``)
client.channels.cache.get('787987649977384960').send({embeds: [embed]})
  
message.channel.send("Bildiriminiz, ekibimize gönderildi! İyi günler dileriz. :white_check_mark:").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Bildir','bildir','BİLDİR'],
  permLevel: 0  
};

exports.help = {
  name: 'bildir',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}