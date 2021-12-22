const {MessageEmbed} = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
      .setColor()
      .setTimestamp("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send({embeds: [ozelmesajuyari]});
  }
  const EmbedCrewCode = new MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**  Xaine Bot  **")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif"
    ).setDescription(`

**•Logo Komutları**

> [+alev-logo]() → Alevli logo oluşturur. 
> [+altın-logo]() → Altın logo oluşturur. 
> [+bubble-logo]() → Bubble logo oluşturur. 
> [+comic-logo]() → comic logo oluşturur. 
> [+discord-logo]() → Discord logo oluşturur. 

`);

  return message.channel.send({embeds: [EmbedCrewCode]}).then;
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