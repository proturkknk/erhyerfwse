const {MessageEmbed} = require('discord.js');
exports.run = function(client, message, args) {
    let teamtr = message.mentions.users.first();
    if (!teamtr) return message.channel.send('**Çıkma teklifi edeceğin kişiyi etiketler misin?**');
    let dm = args.slice(1).join(' ');
    const dmat = new MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('Biri Sana Çıkma Teklifi Etti! ❤️')
    .addField('Ne cevap vericeksin  acaba bende merak ettim 😆', `Hadi Kabul Et Bence, genede senin kararın. Not!: Eğlence için yapılmış komutdur gerçek anlamayın!`)
    .addField('Teklif Eden Kişi :', `➽ @${message.author.username}`)
    .setFooter('Çıkma Teklifi Xaine')
    teamtr.send({embeds: [dmat]});
    const dmtamam = new MessageEmbed()
    .setColor('RANDOM')
    .setTimestamp()
    .setTitle('❤️ Çıkma Teklifi Ettin!')
    .setFooter('Xaine çıkma teklifi komutu')
    message.channel.send({embeds: [dmtamam]});
    };
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["çteklifet",'teklifet','çte','çıkma-teklifi','Çıkma-teklifi','ÇIKMA-TEKLİFİ'],
  permLevel: 0
};
exports.help = {
  name: 'çıkma-teklifi',
  description: 'Özel komut.',
  usage: 'çıkma-teklifi'
};