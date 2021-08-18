const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("ms");

exports.run = async (client, msg, args) => {    
  let mute = await db.fetch('mute')
  const user = msg.mentions.members.first()
  if(!user) return msg.channel.send('Susturmak İstediniz Kişiyi Etiketleyin!')
  let zaman
  if(ms[args[1]]){
    zaman = ms[args[1]]
  }else{
    if (args[1] == 0) {
      zaman = 0
    }
  }
  if(!zaman) return msg.channel.send('Susturmak istediniz kişiyi ne kadar süreyle susturulucağını yazın. 0=Sınırsız')
  console.log(zaman)
  if(mute){
    
  }else{
    
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