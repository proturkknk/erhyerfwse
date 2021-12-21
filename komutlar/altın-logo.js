const {MessageEmbed} = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 
    if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send({embeds: [ozelmesajuyari]}); }
  if(!yazi) return message.channel.send(`**Lütfen yazı yazınız.** :maple_leaf:`)
  const linqo = `https://habbofont.net/font/steampunk/${yazi}.gif`
  .replace(' ', '+')

  
  const embed = new MessageEmbed()
  .setTitle("Logo")
  .setColor("RANDOM")
  .setImage(linqo)
  .setFooter('Altın Logo Oluşturuldu')
  message.channel.send({embeds: [embed]})
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['altın-logo','Altın-logo','ALTIN-LOGO'],
    permLevel: 0
}

exports.help = {
    name: 'altın',
    description: 'Yazdığınız yazıyı dinamik çevirir.',
    usage: 'altın <yazı>'
}