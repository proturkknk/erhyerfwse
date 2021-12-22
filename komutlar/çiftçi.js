const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')

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
      
      const embed = new MessageEmbed()
      .setTitle('Karaliste')
      .setDescription('Neden Karalistem Var?')
      .setThumbnail(msg.author.avatarURL)
      .addField('Karaliste Bilgiler','\nYasaklayan: **'+yasaklayan+'**\nSebep: '+sebep)
      .setColor('RED')
      .setTimestamp()
      
      msg.channel.send({embeds: [embed]})
      return
    }
  }
    const antispam = await db.fetch(`anti_${msg.channel.id}`)
    db.set(`anti_${msg.channel.id}`,'open')
    var filter = m => m.author.id == msg.author.id;
    const ilk = new MessageEmbed()
    .setTitle('Tohumlar ekilsin mi?')
    .setColor('BLUE')
    .setThumbnail(msg.author.avatarURL)
    .addField('Tohumları ekmek ister misiniz?','  [evet]  [hayır]')/////////////////////////////////////////////////:D
    .setTimestamp()
    msg.channel.send({embeds: [ilk]}).then(msj => {
      msg.channel.awaitMessages(filter,{
      max: 1,
      time: 6000,
      errors: ['time']
    }).catch(err => {
        //hiçbişi
      })
        .then(cvp => {
        if(!cvp) {
          msg.reply('**Malesef süreniz doldu! **')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
        if(cvp.first().content.toLowerCase() != 'evet' && cvp.first().content.toLowerCase() != 'hayır') {
          msg.reply('Tohumlar ekilmedi.')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
      if(cvp.first().content.toLowerCase() == 'evet') {
        const dvm = new MessageEmbed()
        .setTitle('Lütfen bekleyin...')
        .setColor('#ffbe19')
        .setDescription('Tohumlar ekiliyor...')///
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        msg.channel.send({embeds: [dvm]})
        
        setTimeout(function() {
          const com = new MessageEmbed()
        .setTitle('Lütfen bir seçenek seçin.')
        .setColor('GREEN')
        .setThumbnail(msg.author.avatarURL)
          .addField('Tohumlara su verilsin mi?','[evet] [hayır]')
        .setTimestamp()
        msg.channel.send({embeds: [com]})
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
          msg.reply('Su vermediniz için tohumlar büyümedi.')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
            if(cvp.first().content.toLowerCase() == 'evet') {
              const indiriyo = new MessageEmbed()
            .setTitle('Lütfen bekleyin...')
            .setDescription('Tohumlara su veriliyor...')
            .setColor('#ffbe19')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [indiriyo]})
              setTimeout(function() {
                const virus = new MessageEmbed()
            .setTitle('OLAMAZ KARGA!')
            .setColor('RED')
                .addField('Karga geldi ve tohumları yiyor!','[kov] [fındık ver]')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [virus]}).then(msj => {
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
                if(cvp.first().content.toLowerCase() != 'kov' && cvp.first().content.toLowerCase() != 'kov ' && cvp.first().content.toLowerCase() != 'fındık ver') {
                  msg.reply('Kargaya fındık verdiniz ve karga fındığı yedikten sonra gitti, ve tohumlar büyüyor!')
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() == 'fındık ver') {
                  const sil = new MessageEmbed()
            .setTitle('Tebrikler!')
            .setDescription('Kargaya fındık verdiniz ve karga fındığı yedikten sonra gitti, ve tohumlar büyüyor!')
            .setColor('GREEN')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [sil]})
            db.delete(`anti_${msg.channel.id}`)
            return
                }
                if(cvp.first().content.toLowerCase() == '' || cvp.first().content.toLowerCase() == 'kov') {
                  const bsvr = new MessageEmbed()
            .setTitle('OLAMAZ TOHUMLAR GG')
            .setDescription('Gece karga gelerek tohumları yemiş!')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [bsvr]})
            db.delete(`anti_${msg.channel.id}`)
            return
                }
              })
            })
              },5000)
            }
            
            if(cvp.first().content.toLowerCase() == 'hayır') {
              const gg = new MessageEmbed()
            .setTitle('Su vermediniz!')
            .setDescription('Su vermediğiniz için tohumlar büyümedi.')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [gg]})
            db.delete(`anti_${msg.channel.id}`)
            return
            }
          })
        })
        },2000)
        
        db.delete(`anti_${msg.channel.id}`)
      }
      if(cvp.first().content.toLowerCase() == 'hayır') {
            const banane = new MessageEmbed()
            .setTitle('Tohumları ekmediniz!')
            .setDescription('Tohumlar ekilmedi.')
            .setColor('RANDOM')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [banane]})
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
  aliases: ['çiftçi','Çiftçi','ÇİFTÇİ'],
  permLevel: 0
};

exports.help = {
  name: 'çiftçi',
  description: '',
  usage: 'çiftçi'
};