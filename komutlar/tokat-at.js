const Discord = require("discord.js");

exports.run = function(client, message, args) {

let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply("**Kimi Tokatlayacam Reis Etiketlede Vurayım Ağzının Ortasına :D (ironi) **")
      .catch(console.error);

const Embedmatador = new Discord.MessageEmbed()

    .setColor("0x808080")
    .setDescription(
      message.author.username + ` ${user}` + "** adlı kişiyi, Tokatladı! 🖐️ **"
    )
    .setImage("https://media.giphy.com/media/OMuDN8lGwgJQcUBJC2/giphy.gif")
    .setFooter("Xaine", client.user.avatarURL);

message.channel.send(Embedmatador);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tokat-at", "tokatat"],
  permLevel: 0
};

exports.help = {
  name: "tokat",
  description: "Belirtilen kişiyi, Tokatlar!",
  usage: "tokat"
};
