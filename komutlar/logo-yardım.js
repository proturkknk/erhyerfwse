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
      "https://cdn.discordapp.com/emojis/770265448892858368.gif?v=1"
    ).setDescription(`

**• Logo Komutları**

> [+alev-logo]() → Alevli logo oluşturur. 
> [+altın-logo]() → Altın logo oluşturur. 
> [+bubble-logo]() → Bubble logo oluşturur. 
> [+comic-logo]() → comic logo oluşturur. 
> [+discord-logo]() → Discord logo oluşturur. 

`);

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["logo-yardım","Logo-yardım","LOGO-YARDIM"],
  permLevel: 0
};

exports.help = {
  name: "logo",
  description: "Botun Komut Listesini Gösterir!",
  usage: "+logo"
};