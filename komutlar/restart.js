const ayarlar = require("../ayarlar.json")

module.exports.run = async (bot, message, args) => {
    if(message.author.id !== "696365117063036986") if(message.author.id !== "522834911732695041") return message.channel.send(":no_entry_sign: Geliştiricilerimizden Biri Değilsin. Bu Komutu kullanamazsın!")
    
    message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
    
          
}
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["Restart","restart","yenile","yeniden başlat"],
  permLevel: 0
};

module.exports.help = {
  name: 'restart',
  description: 'Sistemi yeniden başlatır',
  usage: 'restart'
};