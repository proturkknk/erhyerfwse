const settings = require('../ayarlar.json');
const prefix = settings.prefix;
const {MessageEmbed} = require('discord.js');
const db = require('quick.db')

exports.run = async (client, msg) => {
  
  const target = msg.mentions.users.first();
  if(target) {
    try{
      const bruh = new MessageEmbed()
.setTitle(`**${target.username} avatarı**`)
.setColor('RANDOM')
.setImage(target.avatarURL())
  msg.channel.send({embeds: [bruh]})
    }catch(error){
      msg.channel.send(`hata: ${error}`)
    }
  }else{
const embed = new MessageEmbed()
.setTitle("**Avatarınız**")
.setColor('RANDOM')
.setImage(msg.author.avatarURL())
  msg.channel.send({embeds: [embed]}) 
  }
  
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['avatar','Avatar','AVATAR',],
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  description: 'avatarınızı gösterir',
  usage: 'avatar'
}; 