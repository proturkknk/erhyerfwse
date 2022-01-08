const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {

  let mesaj = args.slice(0).join(" ");
  if (mesaj.length < 1) return message.channel.send("Kimi öpeceksin?");

const Embedmatador = new MessageEmbed()

    .setAuthor(" ")
    .setColor(`RANDOM`)
    .setDescription(
      message.author.username +
        ` **adlı kullanıcı, ${mesaj} adlı kullanıcıyı öptü.**`
    )

    .setImage(
               `https://media.tenor.com/images/39fe167bdab90223bcc890bcb067b761/tenor.gif`
 );
  return message.channel.send({embeds: [Embedmatador]});
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['öp','öp','ÖP'],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "öp",
  description: "İstediğiniz kişiyi öpersiniz.",
  usage: "öp"
};
