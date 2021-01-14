const Discord = require('discord.js');
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

const liste = await db.fetch('list');

  if(liste) {
    if(liste.find(o => o.id === message.author.id)) {

      const kullanıcı = liste.find(o => o.id === message.author.id)
      const yasaklayan = kullanıcı.yasaklayan
      const sebep = kullanıcı.sebep

      const embed = new Discord.RichEmbed()
      .setTitle('Karaliste')
      .setDescription('Neden Karalistem Var?')
      .setThumbnail(message.author.avatarURL)
      .addField('Karaliste Bilgiler','\nYasaklayan: '+yasaklayan+'\nSebep: '+sebep)
      .setColor('RED')
      .setTimestamp()

      message.channel.send(embed)
      return
    }
  }

  var filter = m => m.author.id == message.author.id
  message.channel.send(message.author.toString() + " Yazı mı Tura mı? ");
  const random = Math.random()
  let answer
  if(random < 0.5) {
    answer = "Tura"
  }
  if(random > 0.55) {
    answer = "Yazı"
  }
  if(random > 0.5 && random < 0.55) {
    answer = "Dik"
  }
  message.channel.awaitMessages(filter,{
    max: 1,
    time: 6000
  })
  .catch(err => {})
  .then(cvp => {
    if(!cvp.first()) return message.reply('Süren Doldu :x:')
    if(cvp.first().content.toLowerCase() == answer.toLowerCase()) {
      message.channel.send('Doğru Bildin: '+answer+'')
    }else{
      message.channel.send('Yanlış Bildin: '+answer+'')
    }
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazıtura','turayazı','paraçevir','paradöndür'],
  permLevel: 0
};

exports.help = {
  name: 'yazı-tura',
  description: 'Yazı Tura Oynamanıza Yarar.',
  usage: 'yazı-tura'
};