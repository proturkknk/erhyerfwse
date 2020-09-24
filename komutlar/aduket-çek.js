const Discord = require("discord.js");

exports.run = function(client, message, args) {

const pinkcode = message.mentions.users.first();

if (!pinkcode)

return message.reply("**Aduket Çekeceğin Kişiyi Etiketlemelisin**");

const EmbedPinkCode = new Discord.MessageEmbed()

    .setDescription(
      `${pinkcode} ` + `**${message.author.username}** Size Aduket Çekti`
    )
    .setImage(
      "https://cdn.discordapp.com/attachments/747769679984066582/748464442249052251/street-fighter-60854-18102018130021.gif"
    ) 
    .setFooter(client.user.username + " Sundu", client.user.avatarURL)
    .setTimestamp();

return message.channel.send(EmbedPinkCode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aduket-çek"],
  permLevel: 0
};

exports.help = {
  name: "aduketçek",
  description: "aduket çekersiniz",
  usage: "[prefix]aduket-çek <etiket>"
};
