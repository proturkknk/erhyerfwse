const {MessageEmbed} = require('discord.js');
const ayarlar = require('../ayarlar.json');
exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setTitle('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send({embeds: [ozelmesajuyari]}); }
    if (message.channel.type !== 'dm') {
      const embed = new MessageEmbed()
    .setAuthor(message.author.username + ' Sahibim bana tokenimi kimseyle paylaşmamamı söyledi.    ')
    .setColor("RANDOM")
    .setTimestamp()
    return message.channel.send({embeds: [embed]});
    }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['token','Token','TOKEN'],
  permLevel: 0
};
exports.help = {
  name: 'token',
  description: 'token',
  usage: 'token'
};
