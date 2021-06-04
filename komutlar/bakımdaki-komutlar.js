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
      "https://cdn.discordapp.com/emojis/670167074584395816.gif?v=1"
    ).setDescription(`

**• Bakımdaki komutlar aşağıda yazmaktadır. Lütfen bu komutlar bakımdan çıkana kadar kullanmayınız.**

> [mute]() → Bakımda lütfen bu komutu kullanmayınız.
> [çekiliş]() → Bakımda lütfen bu komutu kullanmayınız.
> [hatırlatıcı]() → Bakımda lütfen bu komutu kullanmayınız.
> [unmute]() → Bakımda lütfen bu komutu kullanmayınız. 



`);

  return message.channel.send(EmbedCrewCode).then;
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