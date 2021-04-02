const Discord = require("discord.js");

exports.run = (client, message) => {

const matador = Math.floor(Math.random() * 100) + 1;

return message.channel.send(`**matador** \n**Efkarınız:** **%${matador}** **Efkar** `);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Efkarım','EFKARIM','efkarım'],
  permLevel: 0
};

exports.help = {
  name: "efkarım",
  description: "Seidou-Chan | Efkarınızı ölçer",
  usage: "efkar Ölçer"
};
