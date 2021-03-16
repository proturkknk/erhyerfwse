const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
const fs = require("fs");
exports.run = (client, message, params) => {
var ne = [

["Bu komut şuan bakımda, kısa zamanda açılacaktır. Anlayışınız için teşekkür ederiz!"]

];
var daşşak = Math.floor(Math.random()*ne.length);
const codeemıng = new Discord.MessageEmbed()
.setDescription(`${ne[daşşak]}`)
.setColor(0xe2ff00)
.setTimestamp()
message.channel.send(codeemıng)
};
exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'şiir',
};