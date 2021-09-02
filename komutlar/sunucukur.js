const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, params) => {

          let prefix =  ayarlar.prefix

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Sunucu kurmak **Yönetici** olmanız gerekir.")
  message.channel.send("Sunucu kurmayı onaylıyormusunuz ``evet/hayır`` evet veya hayır olarak cevap veriniz. \n**(Not!: Botun rolü en üste olmalıdır yoksa hata verebilir.)**").then(() => {
  
 const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content === 'hayır') {
        return message.reply("İşlem iptal edildi.");
      }});
  
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 15000
    }).then((collected) => {
      if (collected.first().content === 'evet') {
      message.guild.channels.cache.filter(u => {
        u.delete()
     })
                    let every = message.guild.roles.cache.find(r => r.name === '@everyone')

    message.author.send(`${message.author}, Selam! Ben ${client.user.username}. İstedin veya istemedin roller, kanallar veya kategoriler olabilir. Bunu istedin gibi düzenleyebilirsin! *${message.guild.name}* adlı sunucuyu şuan kuruyorum, lütfen bekle. Eğer birkaç dakika içerisinde sunucu kurulmazsa ve neden oluştuğunu bilmiyorsan **bildir** komutuyla yetkililerimize bildirebilir veya destek sunucumuza gelerek sorabilirsin. Destek sunucumuza +davet yazarak ulaşabilirsin.`)
                                message.guild.channels.create('Sunucu Hakkında', { type: 'category', reason: 'Bilgi Kanalları!' }).then(kategori => {

    message.guild.channels.create("「📚」kurallar", "text").then(kurallar => {
                    kurallar.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("「📣」duyurular", "text").then(duyurular => {
                          duyurular.createOverwrite(every, {
        SEND_MESSAGES: false
      })
    message.guild.channels.create("「🎉」çekiliş", "text").then(çekilişler => {
                          çekilişler.createOverwrite(every, {
        SEND_MESSAGES: false
      })
      kurallar.setParent(kategori.id)  
      duyurular.setParent(kategori.id)
      çekilişler.setParent(kategori.id)
      
  
                          message.guild.channels.create('Genel', { type: 'category', reason: 'Genel Kanallar!' }).then(kategor => {

  message.guild.channels.create("「💬」 Sohbet", "text").then(sohbet => {
  message.guild.channels.create('「📷」foto-chat', "text").then(medya => {
  message.guild.channels.create('「🚨」bot-komut', "text").then(bot => {
    sohbet.setParent(kategor.id)
    medya.setParent(kategor.id)
    bot.setParent(kategor.id)
      
 
                      message.guild.channels.create('Ses Kanalları', { type: 'category', reason: 'Ses Kanalları!' }).then(kategori => {

  message.guild.channels.create("「🔊」Sohbet | 1", { type: 'voice', reason: 'Bilgi kanalı!' }).then(Pixelien => {
      message.guild.channels.create("「🔊」Sohbet | 2", { type: 'voice', reason: 'Bilgi kanalı!' }).then(Codework => {
  message.guild.channels.create("「🔊」Sohbet | 3", { type: 'voice', reason: 'Bilgi kanalı!' }).then(Pixelienn => {
  message.guild.channels.create("「🔊」Sohbet | 4", { type: 'voice', reason: 'Bilgi kanalı!' }).then(CodeWork1 => {
      message.guild.channels.create("「🔊」Sohbet | 5", { type: 'voice', reason: 'Bilgi kanalı!' }).then(CodeWork2=> {
  message.guild.channels.create('「🎵」Music | 1', { type: 'voice', reason: 'Bilgi kanalı!' }).then(music => {
      message.guild.channels.create('「🎵」Music | 1', { type: 'voice', reason: 'Bilgi kanalı!' }).then(muzik => {
  message.guild.channels.create('「💤」AFK', { type: 'voice', reason: 'Bilgi kanalı!' }).then(afkk => {
    Pixelien.setParent(kategori.id)  
        Codework.setParent(kategori.id)  
    Pixelienn.setParent(kategori.id)  
    CodeWork1.setParent(kategori.id)  
    CodeWork2.setParent(kategori.id)  
    music.setParent(kategori.id)  
        muzik.setParent(kategori.id)  
    afkk.setParent(kategori.id)

       message.guild.roles.create({
        name: '👑| Kurucu',
        color: 'RED',

        permissions: [
            "ADMINISTRATOR",

    ]
      })

      message.guild.roles.create({
        name: 'Admin',
        color: 'ORANGE',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES",
            "KICK_MEMBERS"
    ]
      })

      message.guild.roles.create({
        name: 'Moderatör',
        color: 'GREEN',
        permissions: [
            "MANAGE_GUILD",
            "MANAGE_ROLES",
            "MUTE_MEMBERS",
            "DEAFEN_MEMBERS",
            "MANAGE_MESSAGES",
            "MANAGE_NICKNAMES"
    ]
      })

      message.guild.roles.create({
        name: 'Özel üye',
        color: 'YELLOW',
      })

      message.guild.roles.create({
        name: 'Üye',
        color: 'WHITE',
      })

      message.guild.roles.create({
        name: 'Bot',
        color: 'BLACK',
  })
})
})
})

})
})

})
})
})
})
})

})
})

})
})
})

})

      })

}})})
                    .catch(error => {
                    message.channel.send(`:warning: Bir hata oluştu! Oluşan hata için üzgünüz. Neden oluştuğunu bilmiyorsan **bildir** komutuyla yetkililerimize bildirebilir veya destek sunucumuza gelerek sorabilirsin. Destek sunucumuza +davet yazarak ulaşabilirsin.`);
                    console.error('Hata:', error);
                });

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hazırsunucu','hazır-sunucu','sunucu-kur','Sunucu-kur','SUNUCU-KUR',],
  permLevel: 0
};

exports.help = {
  name: 'sunucukur',
  description: 'Sizin için sunucu kurar.',
  usage: 'sunucukur'
};