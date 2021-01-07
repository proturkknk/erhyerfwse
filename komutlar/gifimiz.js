const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let replies = ["https://media.giphy.com/media/LZfH1caaZveK3KhXBb/giphy.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Gifiniz")
        .setColor("#FF69B4")
        .setFooter(`Gifiniz ${message.author.tag} `, message.author.avatarURL)
        .setImage(replies[result]);

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
  description: 'Rastgele gif atar.',
  usage: 'gif'
};