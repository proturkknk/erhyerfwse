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

**•Yenilikler**

> [30.04.2021]() → **Yenilikler** komutu eklendi.
> [30.04.2021]() → **küfür-engel** komutu eklendi.
> [24.05.2021]() → **Kahve** komutu eklendi.
> [04.06.2021]() → **yenilikler** komutu devre dışı bırakıldı.

**Bazı kullanıcılarımız yenilikler komutundan sadece gelen komut ve yardım menülerini öğrenebiliyorlardı. Bunun önüne geçmek için Yenilikler komutunu Devre dışı bıraktık. Artık kullanıcılarımız destek sunucumuzdan tüm olayları ve gelen yenilikleri öğrenebiliceklerdir. Yenilikler komutuna bakan kullanıcılarımızın devre dışı bıraktımızı öğrenebilmeleri için komutu şuanlık silmiyoruz. +davet yazarak destek sunucumuzu öğrenebilirsiniz.**


`);

  return message.channel.send({embeds: [EmbedCrewCode]}).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yenilikler","Yenilikler","YENİLİKLER"],
  permLevel: 0
};

exports.help = {
  name: "yenilikler",
  description: "Bota eklenen yenilikleri gösterir",
  usage: "+yenilikler"
};