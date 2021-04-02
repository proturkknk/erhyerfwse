const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new Discord.MessageEmbed()
    .setColor("#00ee00")
    .setAuthor(`Xaine`, client.user.avatarURL)
    .addField(
      `> Neden Biz ?`,
      `**Çünkü Xaine Ekibi olarak işimizi en iyi şekilde yaptığımızı düşünüyoruz ve sizide aramızda görmekten mutluluk duyuyoruz. :)**`
    )
    .addField(
      `> Botumuzu Davet Etmek isterseniz`,
      `[Botu Davet Et!](https://discord.com/oauth2/authorize?client_id=774235071653216286&scope=bot&permissions=8)`
    )
    .addField(
      `> Destek Sunucusuna Katılmak İsterseniz`,
      `[Destek Sunusu](https://discord.gg/Kekc2pU)`
    )
    .addField(
      `> Kod Paylaşım Sunucusuna Katılmak İsterseniz`,
      `[Kod Paylaşım Sunucumuz](https://discord.gg/Kekc2pU)`
    )
    .addField(
      `> Sitemize Göz Atmak isterseniz`,
      `[Sitemiz](https://xainebot.tr.gg/)`
    )
.setImage(`https://media.giphy.com/media/9CkIFgNLtPFAiiCqGN/giphy.gif`)
    .setThumbnail(
      "https://cdn.discordapp.com/emojis/670167074584395816.gif?v=1"
    );
  message.channel.send(motion);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davet','Davet','DAVET'],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "",
  usage: ""
};