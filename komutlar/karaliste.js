const {MessageEmbed} = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')//Seninki quick.db İse Bunu Sil Onun yerine const db = require('quick.db') Yaz
exports.run = (client, message, args) => {
const black = args[0]
if(!ayarlar.sahip.includes(message.author.id)) return message.channel.send({embeds: [
    new MessageEmbed()
    .setDescription(`**Malesef!, Sahibim Değilsin!**`)
//Bots For List Yapımı!
  ]}
)
if(!black) return message.channel.send({embeds: [
    new MessageEmbed()
    .setDescription(`Üyenin İDsini Yaz`)
  ]}
)//Bots For List Yapımı!
  
  if(db.get(`karaliste.${black}`)) return message.reply('Bu kişi zaten karalistede')
  
if(black == message.author.id) return message.channel.send(`Kanka Kendini BlackListe Alamazsın Anla :D`)
message.channel.send({embeds: [
    new MessageEmbed()
    .setDescription(`**<@${black}> Adlı Kişi BlackList'e Eklendi!**`)
  ]}
)
db.set(`karaliste.${black}`, black)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: "karaliste"//Bots For List Yapımı!
}