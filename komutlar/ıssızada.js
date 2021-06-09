const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(client, msg, args) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    const liste = await db.fetch('list');
    
  if(liste) {
    if(liste.find(o => o.id === msg.author.id)) {
      
      const kullanıcı = liste.find(o => o.id === msg.author.id)
      const yasaklayan = kullanıcı.yasaklayan
      const sebep = kullanıcı.sebep
      
      const embed = new Discord.MessageEmbed()
      .setTitle('Karaliste')
      .setDescription('Neden Karalistem Var?')
      .setThumbnail(msg.author.avatarURL)
      .addField('Karaliste Bilgiler','\nYasaklayan: **'+yasaklayan+'**\nSebep: '+sebep)
      .setColor('RED')
      .setTimestamp()
      
      msg.channel.send(embed)
      return
    }
  }
    const antispam = await db.fetch(`anti_${msg.channel.id}`)
    db.set(`anti_${msg.channel.id}`,'open')
    var filter = m => m.author.id == msg.author.id;
    const ilk = new Discord.MessageEmbed()
    .setTitle('Olamaz! Sen tekne ile gezerken ıssız bir adaya düştün! Şimdi ne yapıcağız?')
    .setColor('BLUE')
    .setThumbnail(msg.author.avatarURL)
    .addField('Ne yapacağız?','   [tahta bul]   [ateş yak]')/////////////////////////////////////////////////:D
    .setTimestamp()
    msg.channel.send(ilk).then(msj => {
      msg.channel.awaitMessages(filter,{
      max: 1,
      time: 6000,
      errors: ['time']
    }).catch(err => {
        //hiçbişi
      })
        .then(cvp => {
        if(!cvp) {
          msg.reply('**Malesef süreniz doldu! :(**')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
        if(cvp.first().content.toLowerCase() != 'ateş yak' && cvp.first().content.toLowerCase() != 'tahta bul') {
          msg.reply('Tahta bulmadan nası ateş yakıcağız?')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
      if(cvp.first().content.toLowerCase() == 'evet') {
        const dvm = new Discord.MessageEmbed()
        .setTitle('Tahta bulmaya çalışıyorsun...')
        .setColor('#ffbe19')
        .setDescription('Tahta bulmaya çalışılıyor...')///
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        msg.channel.send(dvm)
        
        setTimeout(function() {
          const com = new Discord.MessageEmbed()
        .setTitle('İşte tahta buldun! Peki şimdi ne yapıcaksın?')
        .setColor('GREEN')
        .setThumbnail(msg.author.avatarURL)
          .addField('Ne yapıcaksın?','[ateş yak] [uçurtma yap]')
        .setTimestamp()
        msg.channel.send(com)
          .then(msj => {
          msg.channel.awaitMessages(filter,{
            max: 1,
            time: 6000,
            errors: ['time']
          }).catch(err => {})
            .then(cvp => {
            if(!cvp) {
          msg.reply('**Süren Doldu!**')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
        if(cvp.first().content.toLowerCase() != 'uçurtma yap' && cvp.first().content.toLowerCase() != 'ateş yak') {
          msg.reply('Uçurtmayı ne yapacaksın! Lütfen burdan kurtulmak için gerekli şeyleri yap ve tekrar dene.')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
            if(cvp.first().content.toLowerCase() == 'ateş yak') {
              const indiriyo = new Discord.MessageEmbed()
            .setTitle('Lütfen bekleyin...')
            .setDescription('Ateş yakmaya çalışıyorsun')
            .setColor('#ffbe19')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(indiriyo)
              setTimeout(function() {
                const virus = new Discord.MessageEmbed()
            .setTitle('Ateş yanmıyor! şimdi ne yapıcaz?')
            .setColor('RED')
                .addField('Ateş yanmıyor!!','[boşver] [sürtünme yöntemiyle dene]')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(virus).then(msj => {
              msg.channel.awaitMessages(filter,{
                max: 1,
                time: 6000,
                errors: ['time']
              }).catch(err => {})
                .then(cvp => {
                if(!cvp) {
                  msg.reply('**Süren Doldu!**')
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() != 'sürtünme yöntemiyle dene' && cvp.first().content.toLowerCase() != 'sürtünme yöntemiyle dene ' && cvp.first().content.toLowerCase() != 'sürtünme yöntemiyle dene') {
                  msg.reply('İşte bu kadar! Ateşi yaktın ve 1 gece üşümeden uyudun! Sabah olunca sahil güvenlikler seni buldu ve kurtardı! Oynadığın için teşekkür ederiz.')
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() == 'çöpe at') {
                  const sil = new Discord.MessageEmbed()
            .setTitle('Afiyet olsun!')
            .setDescription('İşte bu kadar! Ateşi yaktın ve 1 gece üşümeden uyudun! Sabah olunca sahil güvenlikler seni buldu ve kurtardı! Oynadığın için teşekkür ederiz.')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(sil)
            db.delete(`anti_${msg.channel.id}`)
            return
                }
                if(cvp.first().content.toLowerCase() == '' || cvp.first().content.toLowerCase() == 'boşver') {
                  const bsvr = new Discord.MessageEmbed()
            .setTitle('Olamaz hayır!')
            .setDescription('Çok üşüyorsunuz!')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(bsvr)
            db.delete(`anti_${msg.channel.id}`)
            return
                }
              })
            })
              },5000)
            }
            
            if(cvp.first().content.toLowerCase() == 'hayır') {
              const gg = new Discord.MessageEmbed()
            .setTitle('Başka yok!')
            .setDescription('Başka çeşit dondurmamız yok.')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(gg)
            db.delete(`anti_${msg.channel.id}`)
            return
            }
          })
        })
        },2000)
        
        db.delete(`anti_${msg.channel.id}`)
      }
      if(cvp.first().content.toLowerCase() == 'hayır') {
            const banane = new Discord.MessageEmbed()
            .setTitle('Almazsan alma')
            .setDescription('Dondurma almadınız.')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(banane)
        db.delete(`anti_${msg.channel.id}`)
      }
    })
    })
    
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ıssızada','ISSIZADA','ISSIZADA','Issızada','ıssızada'],
  permLevel: 0
};

exports.help = {
  name: 'ıssızada',
  description: 'ıssızada',
  usage: 'ıssızada'
};