const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');
exports.run = async(cclient, message, args) => {

let cembed = new Discord.RichEmbed()
.setAuthor(cclient.user.username, cclient.user.avatarURL)
.setThumbnail(message.author.avatarURL)
.setTimestamp()
.addField("Bot Verileri", `Toplam Sunucu **|** **${cclient.guilds.size}** \nToplam Kullanıcı **|** **${cclient.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \nToplam kanal **|** **${cclient.channels.size}**`)
.addField("Yapımcılar", `<@515590960953032705> **|** **ilyascuk#0001**`)
.addField("Gecikmeler", `Bot Pingi **|** **${cclient.ping}** \nMesaj Gecikmesi **|** **${new Date().getTime() - message.createdTimestamp}**`)
.setColor("#ffd100")
message.channel.send(cembed)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['istatistik','yapımcım'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'istatistik',
    description: 'Türkiyenin Saatini Gösterir',
    usage: 'gç'
  };
