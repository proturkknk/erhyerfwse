const Discord = require('discord.js');
exports.run = (client, message, args) => {
 
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("**Lütfen Bir yazı yazınız**")
let link = "https://habbofont.net/font/bubble_orange/"+isim+".gif"
  const CrewCodeembed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setImage(link)
  message.channel.send(CrewCodeembed)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["buble-logo","Buble-logo","BUBLE-LOGO"],
  permLevel: 0
};
exports.help = {
  name: 'bubble',
  description: 'Logo Yaparsınız',
  usage: '-bubble <yazı>'
};