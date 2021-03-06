const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Elitra`, client.user.avatarURL)
    .addField(
      `> Neden biz ?`,
      `**Çünkü Elitra Ekibi olarak işimizi en iyi şekilde yaptığımızı düşünüyoruz ve sizide aramızda görmekten mutluluk duyuyoruz. :)**`
    )
    .addField(
      `> Botumuzu Davet Etmek isterseniz`,
      `[Botu Davet Etme Linki](https://discord.com/oauth2/authorize?client_id=963328858298384437&scope=bot&permissions=27648860222)`
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
      `[YAKINDA]()`
    )
  
  .addField(
      `> Top.gg den botumuza bakmak isterseniz`,
      `[Top.gg Elitra Bot Linki] (https://top.gg/bot/963328858298384437)]()`
    )


    .addField(
      `> Xaine Bota Oy Vermek İsterseniz`,
      `[Top.gg Oy Verme Linki (https://top.gg/bot/963328858298384437/vote)]()`
    )
.setImage(`https://media.giphy.com/media/BTQg35NV1TFyP03vGu/giphy.gif`)
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif"
    );
  message.channel.send({embeds: [motion]});
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