const {MessageEmbed} = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')//Seninki quick.db İse Bunu Sil Onun yerine const db = require('quick.db') Yaz
exports.run = (client, message, args) => {
const white = args[0]
if(!!ayarlar.sahip.includes(message.author.id)) return message.channel.send(
    {embeds: [
      new MessageEmbed()
    .setDescription(`**Malesef!, Sahibim Değilsin!**`)//Bots For List Yapımı!
    ]}
)
if(!white) return message.channel.send(
    {embeds: [
      new MessageEmbed()
    .setDescription(`Üyenin İDsini Yaz`)
    ]}
)
  
  if(!db.get(`karaliste.${white}`)) return message.reply('Bu kişi karalistede değil')
  
message.channel.send(
    {embeds: [
      new MessageEmbed()
    .setDescription(`**<@${white}> Adlı Kişi Beyaz Listeye Eklendi!**`)
    ]}
)
  db.delete(`karaliste.${white}`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "beyazliste"//Bots For List Yapımı!
}