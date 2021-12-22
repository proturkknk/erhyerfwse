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
    .setTitle('Karpuz almak ister misiniz?')
    .setColor('BLUE')
    .setThumbnail(msg.author.avatarURL)
    .addField('Karpuz almak mı istiyorsunuz?','   [evet]   [hayır]')/////////////////////////////////////////////////:D
    .setFooter("Xaine Bot")
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
          msg.reply('**Malesef süreniz doldu! :(**')
          .setFooter("Xaine Bot")
          db.delete(`anti_${msg.channel.id}`)
          return
        }
        if(cvp.first().content.toLowerCase() != 'hayır' && cvp.first().content.toLowerCase() != 'evet') {
          msg.reply('Karpuz almadınız.')
          .setFooter("Xaine Bot")
          db.delete(`anti_${msg.channel.id}`)
          return
        }
      if(cvp.first().content.toLowerCase() == 'evet') {
        const dvm = new MessageEmbed()
        .setTitle('Lütfen bekleyin...')
        .setColor('#ffbe19')
        .setDescription('Karpuzunuz tartılıyor...')///
        .setFooter("Xaine Bot")
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        msg.channel.send({embeds: [dvm]})
        
        setTimeout(function() {
          const com = new MessageEmbed()
        .setTitle('Lütfen bir seçenek seçin.')
        .setColor('GREEN')
        .setThumbnail(msg.author.avatarURL)
          .addField('Karpuz tam 1 kg toplam 5 TL ediyor kabul ediyor musunuz?','[evet] [hayır]')
          .setFooter("Xaine Bot")
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
              .setFooter("Xaine Bot")
          return
        }
        if(cvp.first().content.toLowerCase() != 'hayır' && cvp.first().content.toLowerCase() != 'evet') {
          msg.reply('Kabul etmediğiniz için karpuz almadınız.')
          .setFooter("Xaine Bot")
          db.delete(`anti_${msg.channel.id}`)
          return
        }
            if(cvp.first().content.toLowerCase() == 'evet') {
              const indiriyo = new MessageEmbed()
            .setTitle('Lütfen bekleyin...')
            .setDescription('Karpuzun parası veriliyor...')
            .setColor('#ffbe19')
              .setFooter("Xaine Bot")
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [indiriyo]})
              setTimeout(function() {
                const virus = new MessageEmbed()
            .setTitle('Karpuz gg şimdi ne yapıcaz?')
            .setColor('RED')
                .addField('Karpuzunuz yolda giderken yere düştü! ','[ye] [çöpe at]')
                .setFooter("Xaine Bot")
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
                  .setFooter("Xaine Bot")
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() != 'ye' && cvp.first().content.toLowerCase() != 'ye ' && cvp.first().content.toLowerCase() != 'Çöpe at') {
                  msg.reply('Karpuzunuz yere düştüğü için daha güzel bir karpuz almaya gittiniz. Afiyet olsun!')
                  .setFooter("Xaine Bot")
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() == 'çöpe at') {
                  const sil = new MessageEmbed()
            .setTitle('Afiyet olsun!')
            .setDescription('Karpuzunuz çöpe atıldı ve sizin için başka karpuz alındı. Afiyet olsun!')
            .setColor('RED')
                  .setFooter("Xaine Bot")
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [sil]})
            db.delete(`anti_${msg.channel.id}`)
            return
                }
                if(cvp.first().content.toLowerCase() == '' || cvp.first().content.toLowerCase() == 'ye') {
                  const bsvr = new MessageEmbed()
            .setTitle('OLAMAZ!')
            .setDescription('Karpuzun içi böcek dolmuş!')
            .setColor('RED')
                  .setFooter("Xaine Bot")
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
            .setTitle('Karpuz almadınız!')
            .setDescription('Karpuz almadınız.')
            .setColor('RED')
              .setFooter("Xaine Bot")
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
            .setTitle('Almadınız!')
            .setDescription('Karpuz almadınız.')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [banane]})
        db.delete(`anti_${msg.channel.id}`)
        .setFooter("Xaine Bot")
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
  aliases: ['karpuz','KARPUZ','Karpuz'],
  permLevel: 0
};

exports.help = {
  name: 'karpuz',
  description: 'karpuz',
  usage: 'karpuz'
};