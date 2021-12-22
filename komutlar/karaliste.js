const {MessageEmbed} = require('discord.js')
const ayarlar = require('../ayarlar.json')
const db = require('quick.db')//Seninki quick.db İse Bunu Sil Onun yerine const db = require('quick.db') Yaz
exports.run = (client, message, args) => {
const black = args[0]
if(message.author.id !== ayarlar.sahip) return message.channel.send({embeds: [
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
if(black == ayarlar.sahip) return message.channel.send(`Kanka Kendini BlackListe Alamazsın Anla :D`)
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