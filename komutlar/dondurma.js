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
    .setTitle('Dondurma almak ister misiniz?')
    .setColor('BLUE')
    .setThumbnail(msg.author.avatarURL)
    .addField('dondurma almak mı istiyorsunuz?','   [evet]   [hayır]')/////////////////////////////////////////////////:D
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
        if(cvp.first().content.toLowerCase() != 'hayır' && cvp.first().content.toLowerCase() != 'evet') {
          msg.reply('tamam.')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
      if(cvp.first().content.toLowerCase() == 'evet') {
        const dvm = new Discord.MessageEmbed()
        .setTitle('Lütfen bekleyin...')
        .setColor('#ffbe19')
        .setDescription('dondurmanız yapılıyor...')///
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        msg.channel.send(dvm)
        
        setTimeout(function() {
          const com = new Discord.MessageEmbed()
        .setTitle('Lütfen bir seçenek seçin.')
        .setColor('GREEN')
        .setThumbnail(msg.author.avatarURL)
          .addField('Dondurmanız limonlu olsunmu?','[evet] [hayır]')
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
        if(cvp.first().content.toLowerCase() != 'hayır' && cvp.first().content.toLowerCase() != 'evet') {
          msg.reply('malesef sadece limonlu var.')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
            if(cvp.first().content.toLowerCase() == 'evet') {
              const indiriyo = new Discord.MessageEmbed()
            .setTitle('Lütfen bekleyin...')
            .setDescription('Limonlu dondurma yapılıyor...')
            .setColor('#ffbe19')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(indiriyo)
              setTimeout(function() {
                const virus = new Discord.MessageEmbed()
            .setTitle('Dondurma gg şimdi ne yapıcaz?')
            .setColor('RED')
                .addField('Dondurmanız yere düştü!','[ye] [çöpe at]')
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
                if(cvp.first().content.toLowerCase() != 'ye' && cvp.first().content.toLowerCase() != 'ye ' && cvp.first().content.toLowerCase() != 'Çöpe at') {
                  msg.reply('Dondurmanız çöpe atıldı ve sizin için başka dondurma yapıldı. Afiyet olsun!')
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() == 'çöpe at') {
                  const sil = new Discord.MessageEmbed()
            .setTitle('Afiyet olsun!')
            .setDescription('Dondurmanız çöpe atıldı ve sizin için başka dondurma yapıldı. Afiyet olsun!')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(sil)
            db.delete(`anti_${msg.channel.id}`)
            return
                }
                if(cvp.first().content.toLowerCase() == '' || cvp.first().content.toLowerCase() == 'ye') {
                  const bsvr = new Discord.MessageEmbed()
            .setTitle('ZEHİRLENDİN!')
            .setDescription('ZEHİRLENDİNİZ!!!')
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
  aliases: ['dondurma','DONDURMA','DONDURMA','Dondurma','dondurma'],
  permLevel: 0
};

exports.help = {
  name: 'dondurma',
  description: 'dondurma',
  usage: 'dondurma'
};