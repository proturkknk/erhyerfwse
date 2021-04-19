const Discord = require("discord.js");
const db = require("quick.db");
exports.run = async (client, message, args) => {
  
  if(message.author.id !== '696365117063036986') {
     const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu Komut Yapımcıma Özeldir !**`)
    .setColor('RANDOM')
    return message.channel.send(embed).then(msg=>msg.delete(3000));
    }
if(args[0] === "aç"){
  if(!args[1]){
  message.channel.send('Bakım sebebini belirtir misin?')
  }
  db.set('bakım', args.slice(1).join(' '))
  if (args.slice(1).join(' ')) {
  message.channel.send("Bakım modu başarıyla açıldı!")
    }
} else if(args[0]=== "kapat"){
  message.channel.send("Bakım başarıyla kapatıldı!")
  db.delete('bakım')
}

}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'bakım',
  description: 'Bakım.',
  usage: 'Bakım'
};