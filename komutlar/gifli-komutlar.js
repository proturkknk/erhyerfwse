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

**• Gif komutları**

> [atatürk]() → Atatürk gifi gösterir.
> [zaferbayramı]() → Zafer Bayramı gifi gösterir.
> [23nisan]() → 23 Nisan gifi gösterir.
> [yıldız]() → Yıldız gifi gösterir. 
> [dünya]() → Dünya gifi gösterir. 
> [yağmur]() → Yağmur gifi gösterir. 
> [yemek]() → Yemek gifi gösterir.
> [ay]() → Ay gifi gösterir. 
> [asker]() → Asker gifi gösterir. 
> [fbi]() → Fbi baskını gösterir. 
> [gol]() → Gol gifi gösterir. 
> [gökyüzü]() → Gökyüzü gifi gösterir. 
> [güneş]() → Güneş gifi gösterir. 
> [kar]() → Kar gifi gösterir. 
> [ramazan]() → Ramazan gifi gösterir. 
> [bayram]() → Ramazan bayramı gifi gösterir.
> [kandil]() → Kandil gifi gösterir.
> [su]() → Su gifi gösterir. 
> [yemek]() →  gifi gösterir.
> [taksim-dayı]() → Taksim dayı gifi gösterir.
> [maske]() → Maske gifi gösterir. 
> [iyikidoğdun]() → İyiki doğdun gifi gösterir.
> [şekerye]() → Şeker gifi gösterir.
> [fotoğraf]() → fotoğraf gifi gösterir.
> [napim]() → Napim gifi gösterir.
> [alkış]() → Alkış gifi gösterir.
> [ağla]() → Ağlama gifi gösterir.
> [sevgili]() → Sevgili gifi gösterir.
> [kolonya]() → Kolonya gifi gösterir.
> [bebek]() → Bebek gifi gösterir.
> [çanakkalezaferi]() → Çanakkale zaferi gifi gösterir.
> [19mayıs]() → 19 Mayıs Atatürkü Anma Gençlik Ve Spor Bayramı gifi gösterir.


`);

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gif-yardım","Gif-yardım","GİF-YARDIM"],
  permLevel: 0
};

exports.help = {
  name: "gif-yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "+gif-yardım"
};