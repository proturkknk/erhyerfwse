const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("> Yapımcım-kurucum: (! TREFAX#0362)")
    .setFooter(" Kurucumun Discord id si: <@696365117063036986>")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kurucu','Kurucu','KURUCU','kurucum','Kurucum','KURUCUM'],
  permLevel: 0
};

exports.help = {
  name: "kurucum",
  description: "",
  usage: ""
};