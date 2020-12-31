const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
  const yapımcım = new Discord.MessageEmbed()
  
  .setTitle('Yapımcılarım ;')
  
  .setColor("GREEN")
  
  .setThumbnail('logo link')
  
  .setDescription('! TREFAX#0362')
  
  message.channel.send(yapımcım)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['yapimcim'],
  permLevel: 0
}

exports.help = {
  name: "yapımcım",
  description: "Botun yapımcılarını gösterir.",
  usage: "yapımcım"
}