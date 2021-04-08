const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const synex = new Discord.MessageEmbed()

.setColor("RANDOM")
.setImage("https://pbs.twimg.com/media/Ej5ZGPkXkAEC56f.jpg")
.setTitle("napim");
  message.channel.send(synex);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["napim","Napim","NAPİM"],
  permLevel: `Yok`
};

exports.help = {
  name: "napim",
  description: "herşeye napim",
  usage: "napim"
};