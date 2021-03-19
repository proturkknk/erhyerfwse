 const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
   let devtr = args.slice(0).join(' ');
   
  if (!devtr) return message.reply('Sahibimi çağırmam için bir sebep gir!')
  if (devtr.length < 7) return message.channel.send("Sebebiniz Daha Bilgilendirici Olması İçin **En Az 7** Karakterli Olmalıdır!");
  if (!message.member.hasPermission("CREATE_INSTANT_INVITE")) return;
  message.channel.createInvite({maxAge: 0}).then(invite => {

    message.channel.send(":white_check_mark: | Sahibime Mesajını İlettim!")
    let xfalcon = new Discord.MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
    .setTitle('Biri Seni Yardın İçin Çağırdı')
    .addField('Sebep:', `${mal}`)
    .addField(`Sunucunun Davet Linki:`, `${invite}`)
    .setThumbnail(message.guild.iconURL)
    .setFooter('Xaine Bot Yapımcıyı Çağırma Sistemi');
    client.users.get(ayarlar.sahip).send();
  });
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["yapımcıyı-çağır"],
  permLevel: 0
};

exports.help = {
  name: 'çağır',
  description: 'Yapımcıyı Sunucuya Çağırır.',
  usage: 'çağır'
};