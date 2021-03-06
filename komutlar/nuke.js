const {MessageEmbed} = require("discord.js")

exports.run = async (client, message, args) => {
 if (!message.member.permissions.has("MANAGE_GUILD")) return message.channel.send(`❌ Bu Komutu Kullana Bilmek İçin \`Mesajları Yönet\` Yetkisine Sahip Olmalısın!`)
  const onayembed = new MessageEmbed()
  .setColor("RANDOM")
  .setTimestamp()
  .setAuthor("Xaine Bot Nuke Komutu")
  .setFooter("Onaylamak için 👍 emojisine, onaylamamak içinse 👎 emojisine tıklayabilirsiniz.")
  .setDescription("** :warning: UYARI!** \n\nEğer nuke işlemini onaylarsanız bu kanal kalıcı olarak **silinecek**,\n**geri getirilemeyecektir!**\nAncak bu kanalın **kopyası(Yenisi) oluşturulacaktır!** \n")
  message.channel.send({embeds: [onayembed]}).then(msg => {
msg.react('👍').then(() => msg.react('👎'));

const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
};

msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
    .then(collected => {
        const reaction = collected.first();

        if (reaction.emoji.name === '👍') {
      message.channel.clone({position: message.channel.position});
      message.channel.delete();
        } else {
            message.reply('Nuke işlemi iptal edildi.');
      msg.delete({timeout:3000})
        }
    })
    .catch(collected => {
        message.reply(' :warning: Bir hatayla karşılaştık! Lütfen daha sonra tekrar deneyiniz. Eğer hatanın nedenini bilmiyorsanız lütfen **bildir** komutuyla Yetkililerimize bildiriniz.');
    });
  
})

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['nuke','Nuke','NUKE'],
  permLevel: 3,
  kategori: "sunucu"
};

exports.help = { 
    name: 'nuke', 
  description: "Bot bulunduğunuz kanalı siler ve yeniden oluşturur.",
  usage: 'nuke',

}