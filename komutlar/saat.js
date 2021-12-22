const {MessageEmbed} = require('discord.js')

exports.run = (client, message, params) => {
const embed = new MessageEmbed()
.setTitle(':flag_tr: Türkiyemizin Saati Aşağıda Yazmaktadır.')
.setTimestamp()
.setFooter('Türkiyemizin Saati ->')
.setColor('RANDOM')

message.channel.send({embeds: [embed]})
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