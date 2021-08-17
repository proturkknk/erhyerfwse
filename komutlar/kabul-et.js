const Discord = require("discord.js");
const db = require("quick.db")
exports.run = (client, message, args) => {
    let kabulettimi = db.fetch(`kabulettimi_${message.author.id}`)
    if (kabulettimi) return message.channel.send("Zaten şartlarımızı kabul ettiniz.")
    db.set(`kabulettimi_${message.author.id}`, 'aktif')
    message.channel.send("Başarıyla şartlarımızı kabul ettiniz. Şartlarımıza uymadığınız takdirde Xaine Bot sunucunuzdan atılacaktır. İyi kullanımlar!")
    return
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  kategori: "bot",
  aliases: ['kabul-et','Kabul-et','KABUL-ET']
};

exports.help = {
  name: "kabulet",
  description: "Şartları kabul edersiniz. C:",
  usage: "kabulet"
};