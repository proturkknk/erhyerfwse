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

1- Oy vermek 

2- Destek sunucusuna katılmak

**Şuanlık sadece 2 şartımız var. Xaine Bot geliştikçe vıp üye avantajları hemde şartları yenilenecektir.**

Dikkat! :warning: VIP Üye Sistemimiz şuan aktif değildir. Gelişmeleri Destek Sunucumuzdan takip edebilirsiniz.

`);

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Vıp-üye-şartları","vıp-üye-şartları","v.ı.p-üye-şartları"],
  permLevel: 0
};

exports.help = {
  name: "vıp-üye-avantajları",
  description: "Vıp üye için gereken şartları gösterir",
  usage: "+vıp-üye-avantajları"
};