const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (bot, message, args, utils) => {
  if(!message.content.startsWith('!'))return;  

  let user = message.mentions.members.first() || message.author;

  let bal = db.fetch(`money_${message.guild.id}_${user.id}`)

  if (bal === null) bal = 0;

  let bank = await db.fetch(`bank_${message.guild.id}_${user.id}`)
  if (bank === null) bank = 0;

  let moneyEmbed = new Discord.MessageEmbed()
  .setColor("#ff7f00")
  .setDescription(`💵・**Cüzdanı:** ${bal}$\n🏛・**Banka Hesabı:** ${bank}$`);
  message.channel.send(moneyEmbed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: []
}
exports.help = {
  name: "bakiye",
}