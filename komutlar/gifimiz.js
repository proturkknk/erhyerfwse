const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/LZfH1caaZveK3KhXBb/giphy.gif,https://media.giphy.com/media/bjHZUMEGO3bVJzOqm9/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.MessageEmbed()
        .setTitle("U-Bot gifimiz!")
        .setColor("#FF69B4")
        .setFooter(`Beğendinizmi? :) ${message.author.tag} `, message.author.avatarURL)
        .setImage("https://media.giphy.com/media/bjHZUMEGO3bVJzOqm9/giphy.gif")

    message.channel.send(gifembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif'],
  permLevel: 0
};

exports.help = {
  name: 'gifimiz',
  description: 'U-bot gifini gösterir.',
  usage: 'gif'
};
