const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor()
      .setTimestamp("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutlar Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  const EmbedCrewCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**  Xaine Bot  **")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif"
    ).setDescription(`

**• Seçmeli oyunlar **


> [karpuz]() → Karpuz oyununu oynarsınız.
> [dondurma]() → Dondurma oyununu oynarsınız.
> [çiftçi]() → Çiftçi oyununu oynarsınız.
> [kahve]() → Kahve oyununu oynarsınız. **YENİ OYUN**
 


`);

  return message.channel.send(EmbedCrewCode).then;
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