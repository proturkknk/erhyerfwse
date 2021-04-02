const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const sharpen = new Discord.MessageEmbed()

.setColor("RANDOM")
.setImage("https://media1.tenor.com/images/0c05631335594254143fb8beb56c7817/tenor.gif?itemid=11558347")
.setTitle("EFSANE Bİ GOL ATTIN! ");

  message.channel.send(sharpen);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gol','Gol','GOL',],
  permLevel: `Yok`
};

exports.help = {
  name: "gol",
  description: "Gol  atarsın",
  usage: "gol"
};