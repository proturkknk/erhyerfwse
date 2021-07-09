const Discord = require("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

module.exports.run = async (bot, message, args) => {
  if(!message.content.startsWith('+'))return;  
  
  let user = message.author;

  let member = db.fetch(`money_${message.guild.id}_${user.id}`)
  let member2 = db.fetch(`bank_${message.guild.id}_${user.id}`)

  if (args[0] == 'hepsi') {
    let money = await db.fetch(`bank_${message.guild.id}_${user.id}`)
    
    db.subtract(`bank_${message.guild.id}_${user.id}`, money)
    db.add(`money_${message.guild.id}_${user.id}`, money)
    let embed5 = new Discord.MessageEmbed()
  .setColor("#ff7f00")
  .setDescription(`:white_check_mark: Bankandan tüm paranı çektin!`);
  message.channel.send(embed5)
  
  } else {

  let embed2 = new Discord.MessageEmbed()
  .setColor("#ff7f00")
  .setDescription(` ❌ Ne kadar para çekeceğinizi belirtmediniz!\n *Kullanım;* ***!paraçek Miktar***`);
  
  if (!args[0]) {
      return message.channel.send(embed2)
  }
  let embed3 = new Discord.MessageEmbed()
  .setColor("#ff7f00")
  .setDescription(` ❌ - parayı bankadan çekemezsin!`);

  if (message.content.includes('-')) { 
      return message.channel.send(embed3)
  }
  let embed4 = new Discord.MessageEmbed()
  .setColor("#ff7f00")
  .setDescription(`❌ Bankanda o kadar paran yok!`);

  if (member2 < args[0]) {
      return message.channel.send(embed4)
  }

  let embed5 = new Discord.MessageEmbed()
  .setColor("#ff7f00")
  .setDescription(`:white_check_mark: Bankadan Başarıyla ${args[0]} ₺ çektin!`);

  message.channel.send(embed5)
  db.subtract(`bank_${message.guild.id}_${user.id}`, args[0])
  db.add(`money_${message.guild.id}_${user.id}`, args[0])
  }
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name:"paraçek",
}