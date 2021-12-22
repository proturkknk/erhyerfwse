const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {
  const rexus = new MessageEmbed()
    .setColor("#00ee00")
    .setDescription("> Xaine Ekibimiz: ! TREFAX#0362, ! kerem98#7884,! xEnsar69#1611")
    .setFooter("<@696365117063036986>")
  message.channel.send({embeds: [rexus]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekip','Ekip','EKİP','ekibimiz','Ekibimiz','EKİBİMİZ'],
  permLevel: 0
};

exports.help = {
  name: "ekibimiz",
  description: "",
  usage: ""
};