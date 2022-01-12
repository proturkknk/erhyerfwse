const db = require('quick.db')
const {MessageEmbed} = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let replies = ["https://i.pinimg.com/originals/43/90/24/4390247c89c7bb46eb90b1de3959a88f.jpg"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new MessageEmbed()
        .setTitle(" İşte şiirler!")
        .setColor("RANDOM")
        .setFooter(`${message.author.username} `, message.author.avatarURL)
        .setImage(replies[result]);
    message.channel.send({embeds: [gifembed]});
};
//CodeShare
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Şiir','şiir','ŞİİR'],
  permLevel: 0
};

exports.help = {
  name: 'şiir', 
  description: "Şiirler atar.",
  usage: 'XaineBot'
};