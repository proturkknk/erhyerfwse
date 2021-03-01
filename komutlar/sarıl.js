const Discord = require("discord.js");

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("Kime sarılacaksın?");

const Embedmatador = new Discord.MessageEmbed()

    .setAuthor(" ")
    .setColor(`ORANGE`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıya sarıldı.**`
    )

    .setImage(
               `https://media.tenor.com/images/39fe167bdab90223bcc890bcb067b761/tenor.gif`
 );
  return message.channel.send(Embedmatador);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "sarıl",
  description: "İstediğiniz kişiye sarılırsınız.",
  usage: "sarıl"
};
