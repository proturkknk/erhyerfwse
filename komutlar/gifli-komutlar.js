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

**•Logo Komutları**

> [yıldız]() → Yıldız gifi gösterir. 
> [ay]() → Ay gifi gösterir. 
> [asker]() → Asker gifi gösterir. 
> [fbi]() → Fbi baskını gösterir. 
> [gol]() → Gol gifi gösterir. 
> [gökyüzü]() → Gökyüzü gifi gösterir. 
> [güneş]() → Güneş gifi gösterir. 
> [kar]() → Discord logo oluşturur. 

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