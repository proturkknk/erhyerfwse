const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const db = require('quick.db')
const {MessageEmbed} = require('discord.js')

exports.run = async(client, msg, args) => {
    const antispam = await db.fetch(`anti_${msg.channel.id}`)
    db.set(`anti_${msg.channel.id}`,'open')
    var filter = m => m.author.id == msg.author.id;
    const ilk = new MessageEmbed()
    .setTitle('Xaine Cafe ye hoşgeldiniz. Kahve mi almak istiyorsunuz?')
    .setColor('BLUE')
    .setThumbnail(msg.author.avatarURL)
    .addField('Kahve almak ister misiniz?','   [evet]   [hayır]')/////////////////////////////////////////////////:D
    .setTimestamp()
    msg.channel.send({embeds: [ilk]}).then(msj => {
      msg.channel.awaitMessages({
        filter: filter,
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
          msg.reply('Yine bekleriz!')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
      if(cvp.first().content.toLowerCase() == 'evet') {
        const dvm = new MessageEmbed()
        .setTitle('Lütfen bekleyin...')
        .setColor('#ffbe19')
        .setDescription('Kahvenizin bardağı hazırlanıyor...')///
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        msg.channel.send({embeds: [dvm]})
        
        setTimeout(function() {
          const com = new MessageEmbed()
        .setTitle('Lütfen bir seçenek seçin.')
        .setColor('GREEN')
        .setThumbnail(msg.author.avatarURL)
          .addField('Kahveniz mocha kahvesi olsunmu?','[evet] [hayır]')
        .setTimestamp()
        msg.channel.send({embeds: [com]})
          .then(msj => {
          msg.channel.awaitMessages({
            filter: filter,
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
          msg.reply('malesef sadece mocha kahvemiz var.')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
            if(cvp.first().content.toLowerCase() == 'evet') {
              const indiriyo = new MessageEmbed()
            .setTitle('Lütfen bekleyin...')
            .setDescription('Kahveniz yapılıyor...')
            .setColor('#ffbe19')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [indiriyo]})
              setTimeout(function() {
                const virus = new MessageEmbed()
            .setTitle('Olamaz! Kahvenizi yolda giderken düşürdünüz!')
            .setColor('RED')
                .addField('Kahveniz yere düştü!','[iç] [kutusunu çöpe at]')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [virus]}).then(msj => {
              msg.channel.awaitMessages({
                filter: filter,
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
                if(cvp.first().content.toLowerCase() != 'kutusunu çöpe at' && cvp.first().content.toLowerCase() != 'kutusunu çöpe at ' && cvp.first().content.toLowerCase() != 'Çöpe at') {
                  msg.reply('Düşürdünüz kahveyi içtiniz için zehirlendiniz!')
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() == 'kutusunu çöpe at') {
                  const sil = new MessageEmbed()
            .setTitle('Afiyet olsun!')
            .setDescription('Kahvenizin kutusu çöpe atıldı ve sizin için başka bir mocha kahve hazırlandı. Afiyet olsun!')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [sil]})
            db.delete(`anti_${msg.channel.id}`)
            return
                }
                if(cvp.first().content.toLowerCase() == '' || cvp.first().content.toLowerCase() == 'iç') {
                  const bsvr = new MessageEmbed()
            .setTitle('ZEHİRLENDİN!')
            .setDescription('Yere düşen kahveyi içtiniz için zehirlendiniz!')
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
            .setTitle('Başka yok!')
            .setDescription('Malesef başka çeşit kahvemiz yok.')
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
            .setTitle('Kahve almadınız.')
            .setDescription('Yine bekleriz.')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send({embeds: [banane]})
        db.delete(`anti_${msg.channel.id}`)
      }
    })
    })
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['KAHVE','Kahve','kahve'],
  permLevel: 0
};

exports.help = {
  name: 'kahve',
  description: 'kahve',
  usage: 'kahve'
};