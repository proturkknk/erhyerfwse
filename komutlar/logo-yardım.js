const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor()
      .setTimestamp()
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

> [-arrow](https://discord.gg/qzHTkhjQgT) → arrow logo oluşturur. 
> [-green](https://discord.gg/qzHTkhjQgT) → green logo oluşturur. 
> [-alev](https://discord.gg/qzHTkhjQgT) → alev logo oluşturur. 
> [-red](https://discord.gg/qzHTkhjQgT) → red logo oluşturur. 
> [-kalp](https://discord.gg/qzHTkhjQgT) → kalp logo oluşturur. 

**• Bilgilendirme**

> :bulb: **Discord Js Sürümü : 12.5.0**
> :robot: **Yapımcım : Ahmet Samet#1226**
> :eye_in_speech_bubble: **Sürümüm : 2.0.1**
© 2021 Frizone | Tüm hakları saklıdır.
`);

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "logo",
  description: "Botun Komut Listesini Gösterir!",
  usage: "-logo"
};