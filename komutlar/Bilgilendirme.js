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
    .setTitle("**  Fleix Bot Bilgilendirme Komutu **")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif"
    ).setDescription(`

**9.01.2022** ---> Fleix Botun ismine açılan sahte bot veya botları bizlere bildirebilirsiniz! Bildiren kullanıcılarımıza ödüllerimiz olacak. 

`);

  return message.channel.send({embeds: [EmbedCrewCode]})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bilgilendirme","Bilgilendirme","BİLGİLENDİRME"],
  permLevel: 0
};

exports.help = {
  name: "bilgilendirme",
  description: "Xaine Bot bilgilendirmelerini gösterir",
  usage: "+bilgilendirme"
};