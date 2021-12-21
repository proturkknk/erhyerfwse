const {MessageEmbed} = require("discord.js");
exports.run = async (client, message, args) => {

    

var page = 0;
 
let arr = [];
message.guild.emojis.cache.forEach(e => {
  arr.push(e)
})

let embd = new MessageEmbed()
.setDescription('<:civcivkalp:853213881111150642>  Xaine Bot eğlence komutları menüsüne hoş geldiniz. Sayfaları değiştirerek kodları görebilirsiniz, İyi eğlenceler!')
message.channel.send({embeds: [embd]}).then(async msg => {
      await msg.react("⬅️");
      await msg.react("➡️");

      let filter = (reaction, user) => user.id !== message.client.user.id && user.id === message.author.id;

      var collector = msg.createReactionCollector(filter, {
        time: 120000
      });

      collector.on("collect", async (reaction, user) => {
        switch (reaction.emoji.name) {
          case "⬅️":
            reaction.users.remove(user).catch(console.error);
            if (page == 0) return;
            --page

              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("xaine -  aşkölçer - balıktut - - roblox-oyuncu-bilgi - düello - efkarım - tersyazı - yazıtura - öp - aduketçek -  balık-tut - beşlik -  ejderha-yazı - emojiyazı - espri - kartopu - kralol - slots - tokat - yazı-tura - çıkma-teklifi -   düello - oylama -  yıldız - kar - adamasmaca - taş-kağıt-makas")
            msg.edit(embd)
           break;
          case "➡️":
            if (page == arr.length) return;
            ++page
            reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("stresçarkı - zarat - nsfw - fal - boks-makinesi - şifre-oluştur -  sayıtut  - komik - sarıl - şiir -  ilginçbilgi - şanslı-sayım - yazan-kazanır - doğruluk-cesaret - kasa-aç")
            msg.edit(embd)
          break;
        case "➡️":
            if (page == arr.length) return;
            ++page
            reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("stresçarkı - zarat - nsfw - fal - boks-makinesi - şifre-oluştur -  sayıtut  - komik - sarıl - şiir -  ilginçbilgi - şanslı-sayım - yazan-kazanır - doğruluk-cesaret - kasa-aç")
            msg.edit(embd)
          

        }
      });
    })
}
    exports.conf = {
        enabled: true,
        guildOnly: true,
        aliases: ["Eğlence", "eğlence","EĞLENCE"],
        permLevel: 0
      };
      
      exports.help = {
        name: "eğlence",
        description: "Sayfalı Yardım Menüsü -ArdaDemr",
        usage: "Sayfalı Yardım Menüsü"
      };