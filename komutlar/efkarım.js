const Discord = require("discord.js");

exports.run = (client, message) => {

const pinkcode = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**Pink Code Bot** \n**Efkarınız:** **%${pinkcode}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "Pink Code Bot | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
