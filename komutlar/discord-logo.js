const {MessageEmbed} = require('discord.js');
exports.run = (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send({embeds: [ozelmesajuyari]}); }
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bişey Yaz**")
let link = "https://flamingtext.com/net-fu/proxy_form.cgi?script=adidas-logo&fontname=ethnocentric&text="+isim+"&script=adidas-logo&text=Discord&fontname=ethnocentric&fillTextColor=%236d81e7&fillOutlineColor=%23fbfaf9&shadowType=0&backgroundRadio=0&imageoutput=true"
  const CrewCodeembed = new MessageEmbed()
  .setColor("BLUE")
  .setImage(link)
  message.channel.send({embeds: [CrewCodeembed]})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["discord-logo","Discord-logo","DİSCORD-LOGO"],
  permLevel: 0
};
exports.help = {
  name: 'discord',
  description: 'Logo Yaparsınız',
  usage: '-logo <yazı>'
};