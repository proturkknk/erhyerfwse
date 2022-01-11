const {MessageEmbed} = require('discord.js')

exports.run = function(client, message, args,params) {

 let destek = "826374034362728478"///destek log kanal id

 let yetkili = "826378987038572565" /// destek ekibi rol ID

message.channel.send(`Destek ekibi çağırıldı! Kısa sürede size yardıma geleceklerdir.`)

message.channel.createInvite({maxAge: 0}).then((invite) => {

const embed = new MessageEmbed()

.setTitle("Bir Destek Çağrısı Var!")

.addField("Sunucu İsmi:", message.guild.name, true)

.addField("Sunucu Sahibi:", message.guild.owner.user.username, true)

.addField("Davet Linki:", invite.url, true)

.setFooter(`Değerli ekibimiz, acilen yardıma gitmeniz gerek!`)

client.channels.cache.get(destek).send({embeds: [embed]}).then(client.channels.cache.get(destek).send(`<@&${yetkili}>`))

});

  

};

exports.conf = {

  aliases: ['destek-ekibi','destekekibi','DESTEK-EKİBİ','DESTEKEKİBİ','Destek-ekibi','Destekekibi'],

  enabled: true,

  guildOnly: false,

  permLevel: 0

};

exports.help = {

  name: 'destek-ekibi',

  description: 'Destek ekibi çağırırsınız',

  usage: 'yaz',

};