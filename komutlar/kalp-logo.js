const {MessageEmbed} = require('discord.js');

exports.run = (client, message, args) => {
if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send({embeds: [ozelmesajuyari]}); }
  let isim = args.slice(0).join("+")
  if(!isim)return message.channel.send("Lütfen bir yazı yazınız.")
let link = "https://bcassetcdn.com/asset/logo/4362501d-64af-4538-8b4e-051670b7dc5f/logo?v=4&text="+isim
  const CrewCodeembed = new MessageEmbed()
  .setImage(link)
  message.channel.send({embeds: [CrewCodeembed]})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kalp-logo','Kalp-logo','KALP-LOGO'],
  kategori: 'logolar',
  permLevel: 0
};

exports.help = {
  name: 'kalp',
  description: 'Logo Yaparsınız',
  usage: 'kalp <yazı>'
};