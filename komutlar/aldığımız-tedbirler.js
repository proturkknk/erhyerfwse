const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor()
      .setTimestamp("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  const EmbedCrewCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**  Xaine Bot  **")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif"
    ).setDescription(`

**• Xaine Bot ve sizin için aldığımız tedbirler yardım menüsü**

> [tedbirler]() → Xaine Bot ve Kullanıcılarımız için aldığımız tedbirleri gösterir.

**Daha fazla tedbir bilgileri eklenecektir.**

`);

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aldığımız-tedbirler","Aldığımız-tedbirler","ALDIĞIMIZ-TEDBİRLER"],
  permLevel: 0
};

exports.help = {
  name: "aldığımız-tedbirler",
  description: "Botun Komut Listesini Gösterir!",
  usage: "+aldığımız-tedbirler"
};