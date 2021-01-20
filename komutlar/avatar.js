const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, msg) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let liste = await db.fetch('list');
    
  if(liste) {
    if(liste.find(o => o.id === msg.author.id)) {
      
      const kullanıcı = liste.find(o => o.id === msg.author.id)
      const yasaklayan = kullanıcı.yasaklayan
      const sebep = kullanıcı.sebep
      
      const embed = new Discord.RichEmbed()
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
  
  const target = msg.mentions.users.first();
  if(target) {
    try{
      const bruh = new Discord.RichEmbed()
.setTitle(`**${target.username} adlı kullanıcının avatarı**`)
.setColor('RANDOM')
.setImage(target.avatarURL)
  msg.channel.send({bruh})
    }catch(error){
      msg.channel.send(`hata: ${error}`)
    }
  }else{
const embed = new Discord.RichEmbed()
.setTitle("**Avatarınız**")
.setColor('RANDOM')
.setImage(msg.author.avatarURL)
  msg.channel.send({embed}) 
  }
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar'],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'avatarınızı gösterir',
  usage: 'avatar'
}; 