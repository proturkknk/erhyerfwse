const {MessageEmbed} = require('discord.js')
const ayarlar = require('../ayarlar.json')
const { Database } = require('quick.db')//Seninki quick.db İse Bunu Sil Onun yerine const db = require('quick.db') Yaz
exports.run = (client, message, args) => {
const white = args[0]
if(message.author.id !== ayarlar.sahip) return message.channel.send(
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
message.channel.send(
    {embeds: [
      new MessageEmbed()
    .setDescription(`**<@${white}> Adlı Kişi Beyaz Listeye Eklendi!**`)
    ]}
)
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