const {MessageEmbed} = require("discord.js");

exports.run = function(client, message, args) {

const cu = message.mentions.users.first();

if (!cu)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin**");

const Embedmatador = new MessageEmbed()

    .setDescription(
      `${cu} ` + `**${message.author.username}** Size Aduket Çekti!`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send({embeds: [Embedmatador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket-çek","Aduket-çek","Aduketçek","aduketçek","ADUKET-ÇEK","ADUKETÇEK"],
  permLevel: 0
};

exports.help = {
  name: "aduketçek",
  description: "",
  usage: "aduket-çek <etiket>"
};
