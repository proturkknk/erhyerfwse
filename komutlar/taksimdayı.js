const {MessageEmbed} = require("discord.js");

exports.run = (client, message) => {

const e = new MessageEmbed()

      .setAuthor("Taksim Dayı!")//matador
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setURL("https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif")
      .setImage(`https://cdn.discordapp.com/attachments/757801669839814677/758308330585325619/taksim.gif`);

return message.channel.send({embeds: [e]});

};
exports.conf = {
  enabled: true,
  guild0nly: false,
  aliases: ["dayı", "taksim",'Taksim-dayı','taksim-dayı','TAKSİM-DAYI'],
  permLevel: 0
};
exports.help = {
  name: "taksimdayı",
  description: "taksim dayı resmi atar",
  usage: "taksimdayı"
};
