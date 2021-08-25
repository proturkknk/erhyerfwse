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

**• Xaine Bot ve sizin için aldığımız tedbirler**

Güvenlik tedbirlerimizi ve merak ettiniz soruları yanıtma zamanı!

1- Xaine Bota nası güvenelim?
**otumuzun tokeni gizli bi odada saklanıyor. Ve 180k kullanıcılarımız ve her geçen gün artan sunucu sayımızla güvenirliğimizi kazanmaya devam ediyoruz. Peki nası size güvenli oldumuzu kanıtlayacağız? Şuana kadar botu hiçbi şekilde kötü amaç veya amaçlar için kullanmadık kullanmayacağız. Şartlarımızda bile bunları belirtiyoruz.**

2-Botu nası koruyorsunuz?
**Botun içine girmeleri imkansızdır. Botun Tokeni gizli bi odada saklanıyor.( Oda dedim alt yapının içinde) O odaya sadece ekibimiz erişebilir. Başka birinin girmesi imkansızdır.**

3-Kullanıcıların verilerini depoluyor musunuz?
**Kullanıcılarımızın verilerine hiçbi şekilde erişemeyiz. Ve hiçbi komutumuz verileri alan bi komut değildir. Bu sebepten dolayı verilerinizi almamız imkansızdır.**

4-Xaine Bot ekibinize güveniyor musunuz?
**Ekibime güvenim sonsuzdur. En güvenilir insanlar ve kodlardan anlayan kişiler vardır.**

5- Xaine Bot sunucumuzu patlatabilir mi?
**Biz kullanıcılarımızın güvenliği için herşeyi yaparız. Ve asla ekipten birinin gelip sizin sunucunuzu patlatamaz. Patlatılırsa bile botun içine giren belirsiz kişi tarafından patlatılır. Botun içine birinin girmeside imkansızdır. 1. Belirttimiz madde ile korunuyor.**

6- Xaine Bot sunucumuzda belirsiz bi mesaj atabilir mi?
**Xaine Bot komutlarda yazılan dışında yazı yazması imkansızdır.**

**Daha fazla tedbir bilgileri eklenecektir.**

`);

  return message.channel.send(EmbedCrewCode).then;
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["aldığımız-tedbirler","Aldığımız-tedbirler","ALDIĞIMIZ-TEDBİRLER"],
  permLevel: 0
};

exports.help = {
  name: "aldığımız-tedbirler",
  description: "Botun Komut Listesini Gösterir!",
  usage: "+aldığımız-tedbirler"
};