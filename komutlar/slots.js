const Discord = require("discord.js");
const { Command } = require("discord.js-commando");
const { stripIndents } = require("common-tags");

const slots = ["🍇", "🍊", "🍐", "🍒", "🍋"];

exports.run = function(client, message) {

var pinkcode = slots[Math.floor(Math.random() * slots.length)];
var pinkcode2 = slots[Math.floor(Math.random() * slots.length)];
var pinkcode3 = slots[Math.floor(Math.random() * slots.length)];

  if (pinkcode === pinkcode2 && pinkcode === pinkcode) { return message.channel.send(stripIndents`**Tebrikler, kazandınız!** \n\n${pinkcode} **:** ${pinkcode2} **:** ${pinkcode3}`);

  } else {
   return message.channel.send(stripIndents`**Eyvah, kaybettin!** \n\n${pinkcode} **:** ${pinkcode2} **:** ${pinkcode3}`);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "slots",
  description: "Slots oyunu oynatır",
  usage: "slots"
};
