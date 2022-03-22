const {MessageEmbed} = require("discord.js");

exports.run = function(client, message, args) {

let user = message.mentions.users.first();

if (message.mentions.users.size < 1)
return message

      .reply("**Kimi Tokatlayacam Reis Etiketlede Vurayım Ağzının Ortasına :D (ironi) **")
      .catch(console.error);

const Embedmatador = new MessageEmbed()

    .setColor("RANDOM")
    .setDescription(
      message.author.username + ` ${user}` + "** adlı kişiyi, Tokatladı! 🖐️ Tabikide şaka amaçlı :D **"
    )
    .setImage("https://media.giphy.com/media/OMuDN8lGwgJQcUBJC2/giphy.gif")
    .setFooter("Fleix Bot", client.user.avatarURL);

message.channel.send({embeds: [Embedmatador]});

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["tokat-at", "tokatat","Tokatat","Tokat-at","TOKATAT","TOKAT-AT"],
  permLevel: 0
};

exports.help = {
  name: "tokat",
  description: "Belirtilen kişiyi, Tokatlar!",
  usage: "tokat"
};
