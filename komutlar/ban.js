const {MessageEmbed} = require("discord.js");
const fs = require("fs");

exports.run = (client, message, args) => {
  if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
      .setColor("RANDOM")
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField(" :warning: Uyarı!", "`ban` adlı komutu özel mesajlarda kullanamazsın.");
    return message.author.send({embeds: [ozelmesajuyari]});
  }
  let guild = message.guild;
  let reason = args.slice(1).join(" ");
  let dızcılaraselam = message.mentions.users.first();

  if (message.mentions.users.size < 1)
    return message.channel
      .send(`Lütfen sunucudan yasaklayacağınız kişiyi etiketleyin.`)
      .catch(console.error);

  message.guild.members.cache.get
    return message.channel.send(
      `❌ Belirttiğiniz kişinin Yetkisi Benden Daha Üstün. O yüzden Banlayamıyorum.(Yasaklama)`
    );
  message.guild.member(dızcılaraselam).ban();

  message.channel.send(
    " Başarılı! Belirttiğiniz kullanıcıyı banlandım. " +
      dızcılaraselam +
      " İD'li kullanıcı **" +
      reason +
      "** sebebiyle sunucudan yasaklandı."
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['ban','Ban','BAN'],
  permLevel: 3,
  kategori: "moderasyon"
};

exports.help = {
  name: "ban",
  category: "moderasyon",
  description: "İstediğiniz kişiyi sunucudan yasaklar. Xaine Bota ait! eğer alt yapıya girdiyseniz çalarsanız hakkımız sonuna kadar haramdır.",
  usage: "ban <@kullanıcı> <sebep>"
};
