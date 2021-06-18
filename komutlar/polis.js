const db = require('quick.db')
const Discord = require("discord.js")
exports.run = (client,message) => {
  let levix;
  let kanal = "728190172490891275" //kanal id
  
    levix = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setAuthor(message.author.username +  'Karakola Senin Hakkında İhbar Düştü !!! (ironi)')
  .setImage(`http://www.hareketligifler.net/data/media/114/polis-hareketli-resim-0023.gif`)
  .setDescription(``)
 message.channel.send(`<@728190172490891275> Karakola Bak Hakkında Biri İhbar Yapmış. (ironi ciddiye almayın) ;(`) 

  client.channels.get(kanal).send(levix)
  
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['polis','Polis','POLİS'],
  permLevel: 0
};

exports.help = {
  name: 'polis',
  description: 'Polisi Arar (ciddiye almayın)',
  usage: 'polis'
};