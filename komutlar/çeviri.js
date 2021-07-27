const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let google = args.slice(0).join('+');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
        if(!link)return message.reply("Hata !")
  if(!google) return message.reply("**Lütfen Ne Çevireceğimi Yaz**")
        let embed = new Discord.MessageEmbed()
    
    .setColor("RANDOM")
    .setTimestamp()
    
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
.setFooter(' Xaine Bot | Çeviri sistemi')    
          
    message.channel.send(embed);

  
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çeviri','Çeviri','ÇEVİRİ'],
  permLevel: 0
};

exports.help = {
  name: 'çeviri',
  description: 'İngilizce-Türkçe Çeviri',
  usage: 'çeviri'
};