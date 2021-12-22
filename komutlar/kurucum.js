const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new MessageEmbed()
    .setColor("RANDOM")
    .setDescription("> Yapımcım-kurucum: (! TREFAX#0362)")
    .setFooter(" Kurucumun Discord id si: <@696365117063036986>")
  message.channel.send({embeds: [rexus]});
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