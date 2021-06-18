const Discord = require('discord.js')

exports.run = (client, message, params) => {
const embed = new Discord.MessageEmbed()
.setTitle(':flag_tr: Türkiyemizin Saati Aşağida Yazmaktadır.')
.setTimestamp()
.setFooter('Türkiyemizin Saati ->')
.setColor('RANDOM')

message.channel.send(embed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['saat','Saat','SAAT'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'saat',
    description: 'saat',
    usage: 'saat'
  };