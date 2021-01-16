const ms = require('ms');

exports.run = async (client, message, args) => {

  //Coded by 
    if(!message.member.hasPermission('MANAGE_MESSAGES') && !message.member.roles.cache.some((r) => r.name === "Giveaways")){
        return message.channel.send(':x: Çekiliş başlatmak için yetkiye sahip değilsin.');
    }

   //Coded by 
    let giveawayChannel = message.mentions.channels.first();
    //Coded by 
    if(!giveawayChannel){
        return message.channel.send(':x: Bir kanal etiketlemen lazım!');
    }

    //Coded by 
    let giveawayDuration = args[1];
   //Coded by 
    if(!giveawayDuration || isNaN(ms(giveawayDuration))){
        return message.channel.send(':x: Bi zaman belirtmen lazım (d,h,m,s)!');
    }

//Coded by 
    let giveawayNumberWinners = args[2];
   //Coded by 
    if(isNaN(giveawayNumberWinners) || (parseInt(giveawayNumberWinners) <= 0)){
        return message.channel.send(':x: Kaç kişinin çekilişi kazanacağını yazmalısın!');
    }

   //Coded by 
    let giveawayPrize = args.slice(3).join(' ');
    //Coded by 
    if(!giveawayPrize){
        return message.channel.send(':x: Bir ödül koymalısın');
    }

//Coded by 
    client.giveawaysManager.start(giveawayChannel, {
  //Coded by
        time: ms(giveawayDuration),
//Coded by
        prize: giveawayPrize,
//Coded by 
        winnerCount: giveawayNumberWinners,
   //Coded by
        hostedBy: client.config.hostedBy ? message.author : null,
//Coded by 
        messages: {
            giveaway: (client.config.everyoneMention ? "@everyone\n\n" : "")+"çekiliş başladı",
            giveawayEnded: (client.config.everyoneMention ? "@everyone\n\n" : "")+"çekiliş bitti",
            timeRemaining: "Kalan süre: **{duration}**!",
            inviteToParticipate: "Katılamk için 🎉 emojisine basın",
            winMessage: "Tebrikler, {winners}! Kazandığın ödül: **{prize}**!",
            embedFooter: "Çekilişler",
            noWinner: "Çekilişe kimse katılmadığı için sona erdi.",
            hostedBy: "Çekilişi yapan: {user}",
            winners: "kazanan(lar)",
            endedAt: "Bittiği tarih",
            units: {
                seconds: "saniye",
                minutes: "dakika",
                hours: "saat",
                days: "gün",
                pluralS: false //Coded by
            }
        }
    });

    message.channel.send(`bir çekiliş başladı, ${giveawayChannel}!`);

};

exports.conf = {
  enabled: true,
  aliases: ['çekiliş','Çekiliş','Cekilis','Cekilis'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'çekiliş',
  description: 'çekiliş',
  usage: 'çekiliş'
};