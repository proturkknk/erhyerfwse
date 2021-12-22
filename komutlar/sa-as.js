const db = require('quick.db')

exports.run = async (bot, message, args) => {
  
  
  if (!message.member.permissions.has('MANAGE_GUILD')) return message.channel.send(':warning: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!')
  if (!args[0]) return message.channel.send(':warning: **Sa-as yazısını açmak için `sa-as aç veya kapat`**')
  
  if (args[0] == 'aç') {
    db.set(`saas_${message.guild.id}`, 'açık')  
      message.channel.send(`:white_check_mark: **Başarıyla \`sa-as Sistemini\` Açtınız, Artık Bot \`sa\` Yazıldığında Cevap Verecek.**`)
    
  }
  if (args[0] == 'kapat') {
    db.set(`saas_${message.guild.id}`, 'kapali')
    
      message.channel.send(`:white_check_mark: **Başarıyla \`sa-as Sistemini\` Kapattınız, Artık Bot \`sa\` Yazıldığında Cevap Vermeyecek.**`)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa-as','Sa-as','SA-AS'],
  permLevel: 3
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: '!sa-as',
  category: 'Salladım burayı napim za'
};
