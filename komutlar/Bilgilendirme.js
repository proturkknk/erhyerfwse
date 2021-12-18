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
    .setTitle("**  Xaine Bot Bilgilendirme Komutu **")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif"
    ).setDescription(`

18.12.2021 ---> Alt yapımız bir yere bağlı olduğundan o yer bir hacklenme durumuyla karşılaşırsa çok sıkıntı bi durum olabilir. Bu yüzden sunucularınızın yedeklerinizi almayı ısrarla öneriyoruz. Xaine Botun tüm güvenlik önemleri alındı Ama siz genede tedbiri elden bırakmayın. Bu yüzden sunucunuzun yedeğini alın ve riske atmayın.

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