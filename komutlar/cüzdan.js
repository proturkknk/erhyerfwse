  const Discord = require('discord.js')
const db = require('quick.db');
var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  let kllanç = message.mentions.users.first() || message.author;
  const bakiye = await db.fetch(`bakiyecdare-${kllanç.id}`) || '0';
  const hesapdurumu = await db.fetch(`hesapdurumcodare-${kllanç.id}`);
  const hesapismi = await db.fetch(`hesapismiçodare-${kllanç.id}`)
    if(hesapdurumu) {
      if(!hesapismi) {
        const embedczdn = new Discord.RichEmbed()
        .setColor(client.ekoayarlar.renk)
        .setDescription(`Hesap İsmi: ${client.ekoayarlar.isimsiz}\n Bakiye: **${bakiye}**`)
        message.channel.send(embedczdn)
      } else {
        if(hesapdurumu) {
          if(hesapismi) {
            const embedczdnv2 = new Discord.RichEmbed()
            .setColor(client.ekoayarlar.renk)
            .setDescription(`Hesap İsmi: ${hesapismi}\n Bakiye: **${bakiye}**`)
            message.channel.send(embedczdnv2)
          }
        }
      }
    }
  }
}
    
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    katagori: "Ekonomi"
}
exports.help = {
    name: 'bakiye',
    description: 'Bakiyenizi gösterir.',
    usage: 'bakiye <@kullanıcı>',
}
