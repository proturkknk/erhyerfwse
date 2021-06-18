const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {

let channel = message.channel;
if(!args[0]) return message.channel.send(':warning: Hata!: Bir kullanıcıyı etiketlemelisiniz.');
if(!message.mentions.members.first()) return message.channel.send(':warning: Hata!: Etiketlediğin kullanıcıyı bulamıyorum.');
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.channel.send('Etiketlediğin kullanıcıyı bulamıyorum.');
if(!args[1]) return message.channel.send('Kaç tane mesaj sileceğimi belirt.');
if(isNaN(args[1])) return message.channel.send(':warning: Hata!: Lütfen bir rakam yazınız.');
var i = 0;
message.delete();
channel.messages.fetch().then(x => {
x.filter(a => a.author.id === member.user.id).map(a => a).slice(0, args[1]).forEach(s => {
i++
s.delete();
if(i === x.filter(a => a.author.id === member.user.id).map(a => a).slice(0, args[1]).length) {
return message.channel.send(`**${i}** mesaj başarıyla silindi.`);
}
});
});


};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kullanıcı-mesaj-sil','Kullanıcı-mesaj-sil','KULLANICI-MESAJ-SİL'],
  permLevel: 0
};
 
exports.help = {
  name: 'kullanıcı-mesaj-sil'
};
