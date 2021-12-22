const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {

let matador = args.slice(0).join("+");
if (!matador) return message.channel.send("Lütfen Bişey Yaz");
let link ="https://dynamic.brandcrowd.com/asset/logo/055241ff-dc4f-4743-90be-1c9caa0c900b/logo?v=4&text=" + matador;

const Embedmatador = new MessageEmbed()

.setImage(link);

return message.channel.send({embeds: [Embedmatador]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Ejderha-yazı','ejderha-yazı','EJDERHA-YAZI'],
  permLevel: 0
};

exports.help = {
  name: "ejderha-yazı",
  description: "Ejderha Logosu Yaparsınız",
  usage: "ejderha <yazı>"
};
