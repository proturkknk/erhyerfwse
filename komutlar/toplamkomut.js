const {MessageEmbed} = require('discord.js')
exports.run = function(client, message, args) {

const embed = new MessageEmbed()
.setTimestamp()
.setFooter(`${message.author.tag} Tarafından İstendi.`)
.addField(`Botta Bulunan Toplam Komut Sayısı`,`${client.commands.size}`)
  message.channel.send({embeds: [embed]})
  
  
};
exports.conf = {
    enabled: false,
    guildOnly: false,
    aliases: ["toplam-komut","komut-sayısı","komutsayısı","Toplam-komut","TOPLAM-KOMUT"],
    permLevel: 0
  };
  
  exports.help = {
    name: 'toplamkomut'
  };