const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
const code = message.mentions.channels.first() || message.channel
const codework = args[0]

if (!codework) {
  
const embed = new Discord.MessageEmbed()
  
.setDescription(`Reklam engel sistemini açmak için ${ayarlar.prefix}**reklam-engel aç #kanal**  ${ayarlar.prefix}**reklam-engel aç** yazmalısınız. Kapatmak içinde`)
.setColor('RED')

return message.channel.send(embed)
}
 
if (codework == 'aç') { 
  
let açıkkapalı = await db.fetch(`reklamEngelcodework_${code.id}`)
    
db.set(`reklamEngelcodework_${code.id}`,'açık')

const embed = new Discord.MessageEmbed()
  
.setDescription(`:white_check_mark: Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda aktif edildi!`)
.setColor('RANDOM')

return message.channel.send(embed)

}
  
if (codework == 'kapat') {
  
let açıkkapalı = await db.fetch(`reklamEngelcodework_${code.id}`)
    
db.delete(`reklamEngelcodeshare_${code.id}`)
  
const embed = new Discord.MessageEmbed()
  
.setDescription(`:white_check_mark: Reklam engel sistemi başarıyla bu kanalda/belirttiğiniz kanalda kapatıldı! `)
.setColor('RANDOM')

return message.channel.send(embed)
}
  
};

exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['reklam-engel','Reklam-engel','REKLAM-ENGEL'],
  permLevel: 3
};
exports.help = {
  name: 'reklam-engel',
  description: 'reklam engellemeyi açar',
  usage: 'reklam-engel'
}