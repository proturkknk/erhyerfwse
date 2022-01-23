const {MessageEmbed} = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
  const nn = new MessageEmbed().setThumbnail();
  if(message.author.id !== message.guild.owner.user.id) return message.reply('Bu komutu kullanabilmek için **Sunucu Sahibi** olmalısın!')
const sistem = await data.fetch(`spam.${message.guild.id}`);
if(sistem) return message.channel.send({embeds: [nn.setDescription(`Spam koruma zaten aktif.`)]}).then(a => a.delete({timeout: 10000}));

data.set(`spam.${message.guild.id}`, 'Rylan');
return message.channel.send({embeds: [nn.setTitle(`İşlem başarılı!`).setColor(0x3639).setDescription(`Spam koruma başarıyla açıldı.`)]}).then(a => a.delete({timeout: 10000}));

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['spam-engel' , 'Spam-engel','SPAM-ENGEL', 'spamengel', 'spam-koruma', 'spamkoruma'],
  permLevel: 0
}

exports.help = {
  name: 'spam',
  category: "moderasyon"
};
