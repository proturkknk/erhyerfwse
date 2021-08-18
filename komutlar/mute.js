const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("ms");

exports.run = async (client, msg, args) => {    
  let mute = await db.fetch('mute')
  let muterole = await db.fetch(`xaine-mute-role.${msg.guild.id}`)
  if(!muterole) return msg.reply('Bu sunucuda mute rolünü belirleyemedik. +muterole komutunu kullanarak mute rolü oluşturun')
  const za = 'Susturmak istediniz kişiyi ne kadar süreyle susturmak istediğinizi yazın. 0 = Sınırsız'
  const user = msg.mentions.members.first()
  if(!user) return msg.channel.send('Susturmak İstediniz Kişiyi Etiketleyin!')
  if(!args[1]) return msg.channel.send(za)
  let zaman
  if(ms(args[1])){
    zaman = ms(args[1])
  }else{
    if (args[1] == 0) {
      zaman = 0
    }
  }
  if(!zaman && zaman != 0) return msg.channel.send(za)
  if(mute){
    msg.reply('za')
  }else{
    const bitis = Date.now()+zaman
    const baslayis = Date.now()
    
    db.push('mute', {'user': user.id, 'guild': msg.guild.id, 'bitis': bitis, 'baslayis': baslayis})
  }
};

exports.conf = {
  aliases: ['sustur','mutele','Sustur','Mute','mute','Mutele'],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Sunucudaki Bir Kişiyi Susuturur.',
  usage: 'mute {@kullanici} {zaman} {sebep}'
};