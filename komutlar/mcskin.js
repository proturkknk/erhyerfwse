const {MessageEmbed} = require(`discord.js`);

exports.run = (client, message, args) => {
 let mesaj = args.slice(0).join(' ');
 let member = message.mentions.members.first();
 let body = 'https://mc-heads.net/body/' + mesaj
 if (mesaj.length < 1) return message.reply('Bir oyuncu adı belirtmelisin.');
 if (mesaj == member) {
    message.reply('kullanıcı değil, bir **oyuncu** adı belirtmelisin.')
 } else {
 const mcbody = new MessageEmbed()
   .setColor('RANDOM')
   .setTitle('Oyuncu: ' + mesaj)
   .setImage(body)
 message.channel.send({embeds: [mcbody]});
 }
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['mcskin','Mcskin','MCSKİN'],
 permLevel: 0
};

exports.help = {
 name: 'mcskin',
 description: 'Belirtilen oyuncunun kostümünü gösterir.',
 usage: 'mcskin '
};