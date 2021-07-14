const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async(client, msg, args) => {
    const antispam = await db.fetch(`anti_${msg.channel.id}`)
    //if(db.fetch(`anti_${msg.channel.id}`)) return msg.reply('kanal başına sadece 1 tane oynanabilir.')
    db.set(`anti_${msg.channel.id}`,'open')
    var filter = m => m.author.id == msg.author.id;
    const ilk = new Discord.MessageEmbed()
    .setTitle('Kurban bayramı geldi! Ve sende kurban kesmek istiyorsun. Seç bakalım hangisi olsun?')
    .setColor('BLUE')
    .setThumbnail(msg.author.avatarURL)
    .addField('Hangisi olsun?','   [koyun]   [tosun]')/////////////////////////////////////////////////:D
    .setFooter("Xaine Bot")
    .setTimestamp()
    msg.channel.send(ilk).then(msj => {
      msg.channel.awaitMessages(filter,{
      max: 1,
      time: 10000,
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
        if(cvp.first().content.toLowerCase() != "koyun" && cvp.first().content.toLowerCase() != "tosun") {
          msg.reply('seçenek belirt.')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
       if(cvp.first().content.toLowerCase() == 'koyun') {
        const dvm = new Discord.MessageEmbed()
        .setTitle('Lütfen bekleyin...')
        .setColor('#ffbe19')
        .setDescription('Koyun satın alınıyor...')///
        .setFooter("Xaine Bot")
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        msg.channel.send(dvm)
        }
      if(cvp.first().content.toLowerCase() == 'tosun') {
        const dvm = new Discord.MessageEmbed()
        .setTitle('Lütfen bekleyin...')
        .setColor('#ffbe19')
        .setDescription('Tosun satın alınıyor...')///
        .setFooter("Xaine Bot")
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        msg.channel.send(dvm)
        
        setTimeout(function() {
          const com = new Discord.MessageEmbed()
        .setTitle('Kurbanlık satın alındı! Şimdi ne yapacağız?')
        .setColor('GREEN')
        .setThumbnail(msg.author.avatarURL)
          .addField('Ne yapacağız?','[kurbanı kes] [bekle]')
          .setFooter("Xaine Bot")
        .setTimestamp()
        msg.channel.send(com)
          .then(msj => {
          msg.channel.awaitMessages(filter,{
            max: 1,
            time: 10000,
            errors: ['time']
          }).catch(err => {})
            .then(cvp => {
            if(!cvp) {
          msg.reply('**Süren Doldu!**')
          db.delete(`anti_${msg.channel.id}`)
          return
        }
             if(cvp.first().content.toLowerCase() == 'kurbanı kes') {
              const indiriyo = new Discord.MessageEmbed()
            .setTitle('Lütfen bekleyin...')
            .setDescription('Kurban yetkililer tarafından kesiliyor...')
            .setColor('#ffbe19')
              .setFooter("Xaine Bot")
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(indiriyo)
        }
            if(cvp.first().content.toLowerCase() != 'bekle' && cvp.first().content.toLowerCase() != 'kurbanı kes') {
              msg.reply('iki seçenekten birini söyleyiniz.')
              db.delete(`anti_${msg.channel.id}`)
              return
            }
            if(cvp.first().content.toLowerCase() == 'kurbanı kes') {
              const indiriyo = new Discord.MessageEmbed()
            .setTitle('Lütfen bekleyin...')
            .setDescription('Kurban yetkililer tarafından kesiliyor...')
            .setColor('#ffbe19')
              .setFooter("Xaine Bot")
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(indiriyo)
              setTimeout(function() {
                const virus = new Discord.MessageEmbed()
            .setTitle('Olamaz! kurbanlık kaçtı! Şimdi ne yapacağız?')
            .setColor('RED')
                .addField('Kurbanlık kaçtı! ','[boşver] [yakalamayı dene]')
                .setFooter("Xaine Bot")
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(virus).then(msj => {
              msg.channel.awaitMessages(filter,{
                max: 1,
                time: 10000,
                errors: ['time']
              }).catch(err => {})
                .then(cvp => {
                if(!cvp) {
                  msg.reply('**Süren Doldu!**')
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() == 'yakalamayı dene') {
                  msg.reply('TEBRİKLER! Kurbanlığı yakaladınız ve yetkililer tarafından kesildi! Oynadığınız için teşekkür ederiz.')
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() != 'boşver ' && cvp.first().content.toLowerCase() != 'sürtünme yöntemiyle dene') {
                  msg.reply('Kurbanlık kaçtı! Nereye gidildiği bilinmiyor. Lütfen tekrar deneyin.')
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() == 'yakalamayı dene') {
                  const sil = new Discord.MessageEmbed()
            .setTitle('Tebrikler')
            .setDescription('TEBRİKLER! Kurbanlığı yakaladınız ve yetkililer tarafından kesildi! Oynadığınız için teşekkür ederiz.')
            .setColor('RED')
                  .setFooter("Xaine Bot")
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(sil)
            db.delete(`anti_${msg.channel.id}`)
            return
                }
                if(cvp.first().content.toLowerCase() == '' || cvp.first().content.toLowerCase() == 'boşver') {
                  const bsvr = new Discord.MessageEmbed()
            .setTitle('OLAMAZ!')
            .setDescription('Kurbanlık kaçtı! Nereye gidildiği bilinmiyor. Lütfen tekrar deneyin.')
            .setColor('RED')
                  .setFooter("Xaine Bot")
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
            
            if(cvp.first().content.toLowerCase() == 'ateş yak') {
              const gg = new Discord.MessageEmbed()
            .setTitle('Tahta bulmadan ateşi nası yakıcağız? Lütfen tekrar deneyin.')
            .setDescription('Karpuz almadınız.')
            .setColor('RED')
              .setFooter("Xaine Bot")
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
      if(cvp.first().content.toLowerCase() == 'boşver') {
            const banane = new Discord.MessageEmbed()
            .setTitle('SOĞUK GECE!')
            .setDescription('Kurbanlık kaçtı! Nereye gidildiği bilinmiyor. Lütfen tekrar deneyin.')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(banane)
        db.delete(`anti_${msg.channel.id}`)
        .setFooter("Xaine Bot")
      }
    })
    })
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ıssızada','ISSIZADA'],
  permLevel: 0
};

exports.help = {
  name: 'kurban',
  description: 'kurban',
  usage: 'kurban'
};