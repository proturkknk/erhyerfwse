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
    .setTitle('Olamaz! Sen teknede gezerken uyuya kaldın ve ıssız bir adaya düştün! Şimdi ne yapacağız?')
    .setColor('BLUE')
    .setThumbnail(msg.author.avatarURL)
    .addField('Ne yapacağız?','   [tahta bul]   [ateş yak]')/////////////////////////////////////////////////:D
    .setFooter("Xaine Bot")
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
          .setFooter("Xaine Bot")
          db.delete(`anti_${msg.channel.id}`)
          return
        }
        if(cvp.first().content.toLowerCase() != 'ateş yak' && cvp.first().content.toLowerCase() != 'tahta bul') {
          msg.reply('Tahta bulmadan nası ateş yakıcağız?.')
          .setFooter("Xaine Bot")
          db.delete(`anti_${msg.channel.id}`)
          return
        }
      if(cvp.first().content.toLowerCase() == 'evet') {
        const dvm = new Discord.MessageEmbed()
        .setTitle('Lütfen bekleyin...')
        .setColor('#ffbe19')
        .setDescription('Tahta bulmaya çalışıyorsunuz...')///
        .setFooter("Xaine Bot")
        .setThumbnail(msg.author.avatarURL)
        .setTimestamp()
        msg.channel.send(dvm)
        
        setTimeout(function() {
          const com = new Discord.MessageEmbed()
        .setTitle('Tahtaları buldunuz şimdi ne yapacağız?')
        .setColor('GREEN')
        .setThumbnail(msg.author.avatarURL)
          .addField('Ne yapacağız?','[ateş yakmayı dene] [uçurtma yap]')
          .setFooter("Xaine Bot")
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
              .setFooter("Xaine Bot")
          return
        }
        if(cvp.first().content.toLowerCase() != 'uçurtma yap' && cvp.first().content.toLowerCase() != 'evet') {
          msg.reply('Uçurtmayı ne yapacaksınız? Lütfen gerekli şeyleri yapın ve tekrar deneyin.')
          .setFooter("Xaine Bot")
          db.delete(`anti_${msg.channel.id}`)
          return
        }
            if(cvp.first().content.toLowerCase() == 'ateş yakmayı dene') {
              const indiriyo = new Discord.MessageEmbed()
            .setTitle('Lütfen bekleyin...')
            .setDescription('Ateş yakmaya çalışıyorsunuz...')
            .setColor('#ffbe19')
              .setFooter("Xaine Bot")
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(indiriyo)
              setTimeout(function() {
                const virus = new Discord.MessageEmbed()
            .setTitle('Ateş yanmıyor ne yapacağız?')
            .setColor('RED')
                .addField('Ateş yanmıyor! ','[boşver] [sürtünme yöntemiyle dene]')
                .setFooter("Xaine Bot")
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
                  .setFooter("Xaine Bot")
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() != 'ye' && cvp.first().content.toLowerCase() != 'boşver ' && cvp.first().content.toLowerCase() != 'sürtünme yöntemiyle dene') {
                  msg.reply('TEBRİKLER! Sürtünme yöntemiyle ateşi yakarak üşümediniz. Sabah olunca sizi kurtarmak için sahil güvenlikler geldi. Oynadığınız için teşekkür ederiz.')
                  .setFooter("Xaine Bot")
                  db.delete(`anti_${msg.channel.id}`)
                  return
                }
                if(cvp.first().content.toLowerCase() == 'sürtünme yöntemiyle dene') {
                  const sil = new Discord.MessageEmbed()
            .setTitle('Tebrikler')
            .setDescription('EBRİKLER! Sürtünme yöntemiyle ateşi yakarak üşümediniz. Sabah olunca sizi kurtarmak için sahil güvenlikler geldi. Oynadığınız için teşekkür ederiz.')
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
            .setDescription('Soğuk bir gece geçirdiniz! Lütfen tekrar deneyin.')
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
            .setDescription('Soğuk bir gece geçirdiniz. Lütfen tekrar deneyin.')
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(msg.author.avatarURL)
            msg.channel.send(banane)
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
  aliases: ['ıssızada','ISSIZADA','Issızada'],
  permLevel: 0
};

exports.help = {
  name: 'ıssızada',
  description: 'ıssızada',
  usage: 'ıssızada'
};