
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
//matador
var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: Aktif, Komutlar yüklendi!`
  );
  console.log(
    `[${moment().format("YYYY-MM-DD HH:mm:ss")}] BOT: ${//
      client.user.username
    } ismi ile giriş yapıldı!`
  );
  client.user.setStatus("online");
  var oyun = [
    client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()+" Tane Kullanıcı",
    client.guilds.cache.size+" Tane Sunucu",
    "İyi eğlenceler :)",
    "7/24 aktif",
    "İyi günler",
    "Kurucularım: ! TREFAX#0362",
    "İyi günler :)",
 "prefix: **+** ",
"Destek sunucumuz: https://discord.gg/Kekc2pU",
    "Benim 7/24 aktif oldumu biliyor muydun?",
"+bildir komutuyla şikayet-öneri de bulunabilceğini biliyor muydun?",
"+saat komutunu kullanarak Türkiyenin saatini öğrenebilceni biliyor muydun?",
    "Mutlu Yıllar!... :)",
      "+50 komut! 😍",
    "+Yardım",
     "Yeni komutlar! 😺",
"#Evdekal",
"#masketak",
"#HayatEveSığar",
"#SosyalMesafe"
  ];
//matador
  setInterval(function() {
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
  }, 2 * 2500);
};//matador

