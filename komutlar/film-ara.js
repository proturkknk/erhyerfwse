const Discord = require('discord.js');
const film = require('film-apisi') //Thetis Code

exports.run = async (client, message, args) => {
if(!args.join(" ")) return message.reply('aramam için film ismi belirtmeniz lazı.')
let c = await film.ara(args.join(" "))
const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle(c.ismi)
.setThumbnail(c.poster)
.addField('Yıldızlar:', c.yıldızlar)
.addField('Tür:', c.tür)
.addField('Puan:', c.puan)
.addField('Yıl:', c.yıl)
.addField('Süre:', c.süre)
.addField('Sezon:', c.sezon)
.addField('Bölüm:', c.bölüm)
.addField('Benzerler:', c.benzerler)
message.channel.send(embed)

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['film-ara','Film-ara','FİLM-ARA',],
    permLevel: 0
}

exports.help = {
    name: 'film-ara',
    description: "imdb den arama yapmanızı sağlar",
    usage: 'film-ara'
}