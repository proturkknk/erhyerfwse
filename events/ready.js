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
    client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()+" Tane Kullanıcım var!",
    client.guilds.cache.size+" Tane Sunucuya eklendim!",
    "Bot bakımdadır. Nedenini Destek sunucumuzdaki Xaine Bot kategorisindeki Duyurular kanalından öğrenebilirsiniz.",
      "+yardım",
      "Bot bakımdadır!",
  ];   
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
    
    fs.readdir("./komutlar/", (error, komutlar) => {
      cmd = komutlar.length
    })
    
  }, 3 * 2500);
};