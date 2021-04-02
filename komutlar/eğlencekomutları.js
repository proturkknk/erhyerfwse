const Discord = require("discord.js");
exports.run = async (client, message, args) => {

    //Oyuncular Şehri - ArdaDemr;
    //Gerekli komutları sizin doldurmanız gerek

var page = 0;
 
let arr = [];
let emojiarr = message.guild.emojis.cache.array();
for(let i =0; Number(i + "0") < (Math.round(emojiarr.length/10)*10 +1); ++i) {
var on = emojiarr.slice(Number(i + "0"), Number(i + "0")+10)
arr.push(on.toString())
}

let embd = new Discord.MessageEmbed()
message.channel.send(embd.setDescription(arr[0]).setDescription('Xaine Bot eğlence komutları menüsüne hoş geldiniz. Sayfaları değiştirerek kodları görebilirsiniz, İyi eğlenceler!')).then(async msg => {
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
              embd.setDescription("dondurma - xaine - atatürk - aşkölçer - balıktut - düello - efkarım - fbi - tersyazı - yazıtura - öp - aduketçek - ay - balık-tut - beşlik - dünya - ejderha-yazı - emojiyazı - espri - kartopu - kralol - slots - taksimdayı - tokat - yazı-tura - çıkma-teklifi - şekerye - su - düello - oylama - güneş - yıldız - kar - adamasmaca - fotoğraf")
            msg.edit(embd)
           break;
          case "➡️":
            if (page == arr.length) return;
            ++page
            reaction.users.remove(user).catch(console.error);
              embd.setColor("RANDOM");
              embd.setFooter(`Sayfa ${page+1} / ${arr.length+1}`);
              embd.setDescription("stresçarkı - duygulandırıcı-söz - zarat - nsfw - gökyüzü - atatürk-sözleri - fal - boks-makinesi - şifre-oluştur - ağla - masketak - sevgili - asker - sayıtut - kolonya - kandil - komik - gol - iyikidoğdun - sarıl - yemek - bebek - şiir - çanakkalezaferi - ilginçbilgi - şanslı-sayım")
            msg.edit(embd)
          break;

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