exports.run = (client, message, args) => {
   if(!message.member.permissions.has("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Lütfen Duyuru Metnini Giriniz.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['duyuru'],
  permLevel: 0
};

exports.help = {
  name: 'duyuru',
  description: '',
  usage: ''
};