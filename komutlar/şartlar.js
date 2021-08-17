const Discord = require("discord.js");
const db = require("quick.db")
exports.run = (client, message, args) => {
    let şartkabul = db.fetch(`şartkabul${message.author.id}`)
    if (şartkabul) return;
    message.channel.send("Şartlarımız:\n\n 1- Sunucunuzda Xaine Botun ismini hakaret, küfür ve benzeri isimler koymayınız. 2-Xaine Botu asla kötü niyet içeren şeylerle kullanmayınız. 3- Bota, kullanıcıları, ekibine ve kurucusuna hakaret, küfür, kötü söz söylemek kesinlikle yasaktır! 4- Botun kopyasını veya ismi ve pp(profil fotoğrafı) olan botlar oluşturmayın! **Şartlarımız bu kadardı. Şartlarımızı kabul edip uymayan kullanıcılarımız botu kullanamayacak ve bot sunucularından atılıcaktır.")
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  permLevel: 0,
  kategori: "bot",
  aliases: []
};

exports.help = {
  name: "şartlar",
  description: "Şartları görüntülersiniz. C:",
  usage: "şartlar"
};