exports.run = (client, message, args) => {
      
   if (!message.guild) {
  return message.author.send(':x: Bu komut özel mesajlarda kullanma kapatılmıştır.'); }  
  if (!message.member.permissions.has("KICK_MEMBERS")) return message.channel.send(`Bu komutu kullanabilmek için **Kullanıcıları At** yetkisine sahip olmalısın.`);
  let sunucu = message.guild;
  let uyarilacak = message.mentions.users.first();
  let sebep = args.slice(1).join(' ');
  if (message.mentions.users.size < 1) return message.channel.send('Uyaracağın kişiyi etiketlemelisin.').catch(console.error);
  if (sebep.length < 1) return message.channel.send('Uyaracağım kişiyi neden uyarmam gerektiğini yazmalısın.');
  message.channel.send('Kullanıcıyı başarıyla uyardım, eğer özel mesajları açıksa özel mesajlarında uyarısı gözükecektir.')
  return uyarilacak.send(`Merhaba! ${sunucu} sunucusunda \`${sebep}\` sebebiyle uyarıldın.`);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['uyarı', 'uyarıver','uyar','Uyar','UYAR'],
  permlevel: 0
};

exports.help = {
  name: 'uyar',
  description: 'Belirtilen kullanıcıyı özel mesajlarında gözükecek şekilde uyarır.',
  usage: 'uyarı',

};