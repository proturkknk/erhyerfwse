const {MessageEmbed} = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
      .setColor()
      .setTimestamp("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutlar Özel Mesajlarda Kullanılamaz!**");
    return message.author.send({embeds: [ozelmesajuyari]});
  }
  const EmbedCrewCode = new MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**  Xaine Bot  **")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif"
    ).setDescription(`

**• <:civcivkalp:853213881111150642>  V.I.P Olmanın Avantajları **

1- Destek sunucumuzda V.I.P 🌟 adlı rol kazanırsınız.

**DAHA FAZLA ÖZELLİK EKLENECEK.**


 


`);

  return message.channel.send({embeds: [EmbedCrewCode]})
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["seçmeli-oyunlar","Seçmeli-oyunlar","SEÇMELİ-OYUNLAR"],
  permLevel: 0
};

exports.help = {
  name: "seçmeli-oyunlar-yardım",
  description: "Botun Komut Listesini Gösterir!",
  usage: "+seçmeli-oyunlar-yardım"
};