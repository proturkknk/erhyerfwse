const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client, msg, args) => {
  const mute = await db.fetch('mute')
  const muterole = await db.fetch(`xaine-mute-role.${msg.guild.id}`)
  
  const user = msg.mentions.members.first()
  if(!user) return msg.reply('Mutesi (susturulması) kaldırılacak kullanıcıyı etiketleyin!')
  
  let otuzbir = []
  mute.forEach(data => {
    if(data.guild == msg.guild.id){
      if(data.user == user.id){
        return
      }
    }
    otuzbir.push(data)
  })
  db.set('mute', otuzbir)
  user.roles.remove(muterole).then(() => {msg.channel.send(user.user.tag+' Adlı kişinin susturulması başarıyla kaldırıldı!')})
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['unmute','UnMute','unmüte','UNMUTE','UNMÜTE','unmüte','Unmute'],
  permLevel: 2,
  category: "moderasyon"
};

exports.help = {
  name: 'unmute',
  description: 'sj.',
  usage: 'unmute @Kullanıcı'
};

