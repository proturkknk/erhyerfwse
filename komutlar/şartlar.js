const Discord = require("discord.js");

exports.run = (client, message) => {
  if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
      .setColor('RANDOM')
      .setTimestamp("RANDOM")
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.send(ozelmesajuyari);
  }
  const EmbedCrewCode = new Discord.MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**  Xaine Bot **")
    .setThumbnail(
      "https://media.giphy.com/media/vPJdwN8Hsu6K4hczUE/giphy.gif"
    ).setDescription(`

**•Xaine Botu kullanmak için şartlarımız**

> Şartlarımız:\n\n 1- Sunucunuzda Xaine Botun ismini hakaret, küfür ve benzeri isimler koymayınız. \n 2-Xaine Botu asla kötü niyet içeren şeylerle kullanmayınız. \n 3- Bota, kullanıcıları, ekibine ve kurucusuna hakaret, küfür, kötü söz söylemek kesinlikle yasaktır! \n 4- Botun kopyasını veya ismi ve pp(profil fotoğrafı) olan botlar oluşturmayın! \n Xaine Botu kendinize ai
**Şartlarımız bu kadardı. Şartlarımızı kabul edip uymayan kullanıcılarımız botu kullanamayacak ve bot sunucularından atılıcaktır.**

**Şartları kabul ediyorsanız +kabulet yazınız.**

`);

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["şartlar","Şartlar","ŞARTLAR"],
  permLevel: 0
};

exports.help = {
  name: "şartlar",
  description: "Xaine Bot kullanmak için şartlar",
  usage: "+şartlar"
};