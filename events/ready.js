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

  setInterval(function() {
    var oyun = [
    client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()+" Tane Kullanıcı!",
    client.guilds.cache.size+" Tane Sunucu!",
    " ✔ İyi Eğlenceler :)",
    " ✔ 7/24 Aktif!",
    " ✔ Kurucularım: ! TREFAX#0362",
    " ✔ İyi Günler :)",
 " ✔ Prefix: + ",
" ✔ Destek sunucumuz: https://discord.gg/Kekc2pU",
    " ✔ Benim 7/24 aktif oldumu biliyor muydun?",
" ✔ Bildir komutuyla şikayet-öneri de bulunabilceğini biliyor muydun?",
" ✔ +saat komutunu kullanarak Türkiyenin saatini öğrenebilceni biliyor muydun?",
      cmd+" ✔  Tane Komut! 😍",
     " ✔ Yeni komutlar! 😺",
      "✔ Prefixi değiştirmek isterseniz +prefix (prefix) komutuyla değiştirebilirsiniz.",
" | +yardım | +bildir | +davet | +yapımcım | +ekibimiz | +prefix | ",
  ];
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
    
    fs.readdir("./komutlar/", (error, komutlar) => {
      cmd = komutlar.length
    })
    
  }, 3 * 2500);
};