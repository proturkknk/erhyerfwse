const ms = require('ms');

exports.run = async (client, message, args) => {

  //Coded by 
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Bu komutu kullanmak için gerekli yetkiye sahip değilsin.');
    }

   //Coded by 
    if(!args[0]){
        return message.channel.send(':x: Doğru bir mesaj id\'si bildirmelisin !');
    }

//Coded by 
    let giveaway = 
//Coded by 
    client.giveawaysManager.giveaways.find((g) => g.prize === args.join(' ')) ||
//Coded by 
    client.giveawaysManager.giveaways.find((g) => g.messageID === args[0]);

//Coded by 
    if(!giveaway){
        return message.channel.send('Verdiğin id için bir çekiliş bulunmuyor `'+ args.join(' ') +'`.');
    }

//Coded by 
  client.giveawaysManager.reroll(giveaway.messageID)
    .then(() => {
        //Coded by 
        message.channel.send('Çekiliş yeniden başlatıldı');
    })
    .catch((e) => {
        if(e.startsWith(`idsi ${giveaway.messageID} olan çekiliş henüz bitmedi.`)){
            message.channel.send('Bu çekiliş bitmemiş!');
        } else {
            console.error(e);
            message.channel.send('Bir hata oluştu...');
        }
    });

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Yeniden-Çek', 'YENİDEN-ÇEK', 'Yeniden Çek', 'yeniden-çek', 'yeniden-cek', 'Yeniden-cek', 'Yeniden cek'],
  permLevel: 0
};

exports.help = {
  name: 'yeniden-çek',
  description: 'sj',
  usage: 'yeniden-çek'
};