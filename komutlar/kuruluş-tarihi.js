const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("> Xaine Bot kuruluş tarihi: 13.08.2020 (13 ağustos 2020)")
    .setFooter("Xaine Bot")
  message.channel.send(rexus);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kuruluş-tarihi','Kuruluş-tarihi','KURULUŞ-TARİHİ'],
  permLevel: 0
};

exports.help = {
  name: "kuruluş-tarihi",
  description: "",
  usage: ""
};