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
    .setTitle("**  Elitra Bot Bakımdaki Komutlar  **")
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/670167074584395816.gif?v=1"
    ).setDescription(`

**• Bakımdaki komutlar aşağıda yazmaktadır. Lütfen bu komutlar bakımdan çıkana kadar kullanmayınız.**

> **mute** → Bakımda, lütfen bu komutu kullanmayınız.
> **çekiliş** → Bakımda, lütfen bu komutu kullanmayınız.
> **hatırlatıcı** → Bakımda, lütfen bu komutu kullanmayınız.
> **unmute** → Bakımda, lütfen bu komutu kullanmayınız. 
> **son-görülme** → Bakımda, lütfen bu komutu kullanmayınız. 
> **ban** → Bakımda, lütfen bu komutu kullanmayınız. 



`);

  return message.channel.send({embeds: [EmbedCrewCode]})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bakımdaki-komutlar","Bakımdaki-komutlar","BAKIMDAKİ-KOMUTLAR"],
  permLevel: 0
};

exports.help = {
  name: "bakımdaki-komutlar",
  description: "Botun Bakımdaki Komutlar Listesini Gösterir!",
  usage: "+bakımdaki-komutlar"
};