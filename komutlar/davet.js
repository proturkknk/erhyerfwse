const {MessageEmbed} = require("discord.js");

exports.run = (client, message, args) => {
  const motion = new MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`Xaine`, client.user.avatarURL)
    .addField(
      `> Neden biz ?`,
      `**Çünkü Xaine Ekibi olarak işimizi en iyi şekilde yaptığımızı düşünüyoruz ve sizide aramızda görmekten mutluluk duyuyoruz. :)**`
    )
    .addField(
      `> Botumuzu Davet Etmek isterseniz`,
      `[Botu Davet Etme Linki](https://discord.com/api/oauth2/authorize?client_id=774235071653216286&permissions=8&scope=bot%20applications.commands`
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
      `[Sitemiz](http://www.xaine.tk/)`
    )
  
  .addField(
      `> Top.gg den botumuza bakmak isterseniz`,
      `[Top.gg Botumuz Linki](https://top.gg/bot/774235071653216286)`
    )


    .addField(
      `> Xaine Bota Oy Vermek İsterseniz`,
      `[Top.gg Oy Verme Linki](https://top.gg/bot/774235071653216286/vote)`
    )
.setImage(`https://media.giphy.com/media/rZ3NPLjVRjAtLnwphZ/giphy.gif?cid=790b761116ac64a6f9e3add97dfb3c8126c68b94170377aa&rid=giphy.gif&ct=g`)
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