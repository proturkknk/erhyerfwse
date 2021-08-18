const { MessageEmbed } = require("discord.js");
const ms = require("ms");

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.reply(
      ` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );

  if (!args[0])
    return message.channel.send(
      ` Bir zaman belirtmelisin! Örnek : **1h** : 1 saat **1m** : 1 dakika **1d** : 1 saniye`
    );
  if (
    !args[0].endsWith("d") &&
    !args[0].endsWith("h") &&
    !args[0].endsWith("m")
  )
    return message.channel.send(` Yanlış zaman girdiniz!`);
  if (isNaN(args[0][0])) return message.channel.send(` Bu bir rakam değil!`);
  let channel = message.mentions.channels.first();
  if (!channel) return message.channel.send(` Bir kanal etiketlemelisin!`);
  let prize = args.slice(2).join(" ");
  if (!prize) return message.channel.send(` Bir ödül belirtmelisin!`);
  message.channel.send(
    ` Çekiliş ${channel} kanalında başarıyla başladı! Eğer çekiliş bozulursa unutma ki bot yenilenmiştir. Eğer tekrar yaptınızda aynı hatayı verirse lütfen kurucularımızla iletişime geçiniz.
    :warning: Dikkat!: Başlattınız çekiliş başlattınız zamanki zamanda biter! (saat,saniye,salise) NOT: Çekiliş komutu bakımdadır. Kısa zamanda bakım çalışması bitecektir, gelişmeleri destek sunucumuzdan takip edebilirsiniz.`
  );
  let Embed = new MessageEmbed()
    .setTitle(`:tada: Çekiliş! :tada:`)
    .setDescription(
      `Çekilişi ${message.author} adlı kullanıcı yapıyor.\nÖdülü ise **${prize}** olarak belirledi!`
    )
    .setFooter(`Bitiş ->`)
    .setTimestamp(Date.now() + ms(args[0]))
    .setColor(`RANDOM`);
  let m = await channel.send(Embed);
  m.react("🎉"); ///ve çekilişşşş
  setTimeout(() => {
    if (m.reactions.cache.get("🎉").count <= 1) {
      message.channel.send(
        `:tada: Çekilişe katılan kişi sayısı: ${
          m.reactions.cache.get("🎉").count
        }`
      );
      return message.channel.send(` Çekilişe yeterli kişi katılmadı!`);
    }

    let winner = m.reactions.cache
      .get("🎉")
      .users.cache.filter(u => !u.bot)
      .random();
    channel.send(`:tada: **${prize}** çekilişinin kazananı -> ${winner} Tebrik ederiz!`);
  }, ms(args[0]));
};
exports.conf = {
  enabled: false,
  guildOnly: false,
  aliases: ['çekiliş','Çekiliş','ÇEKİLİŞ'],
  permLevel: 0
};

exports.help = {
  name: "çekiliş",
  description: "",
  usage: ""
};
