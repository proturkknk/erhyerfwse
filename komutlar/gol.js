const Discord = require("discord.js");

exports.run = async (client, message, args) => {
 
 const sharpen = new Discord.MessageEmbed()

.setColor("RANDOM")
let otuzbir = ["https://media.giphy.com/media/H3PBvJgOSMXttwVSKD/giphy.gif","https://media.giphy.com/media/95PhJTpb2EwW3WdGxk/giphy.gif","https://media.giphy.com/media/9z7UFQ4mniGoqStVxu/giphy.gif"]

let bok = Math.floor(Math.random() * otuzbir.length)

.setImage(otuzbir[bok])

  message.channel.send(sharpen);
}; 

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gol"],
  permLevel: `Yok`
};

exports.help = {
  name: "gol",
  description: "Gol  atarsın",
  usage: "gol"
};