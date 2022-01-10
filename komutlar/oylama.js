
const {MessageEmbed} = require("discord.js");


exports.run = (client, message, args) => {

  if (!message.member.permissions.has("ADMIN"))

    return message.reply(

      "Bu komutu kullanabilmek için **ADMIN** yetkisi gerekir"

    );

 

  let question = args.join(" ");

  if (!question)

    return message.channel.send({embeds: [

      new MessageEmbed()

        .setColor("RANDOM")

        .addField("⛔ __Doğru Kullanım__ ⛔", `=> +oylama **mesaj**`)]}

    );

 let za;

  message.channel.send(

    `Oylamayı başlatmaya emin misiniz?\n**evet** veya **hayır** olarak cevap veriniz. \n Cevap verme süreniz 10 saniye`

  ).then(m => {
    za = m;
  })
  
  const filter = u => u.author.id == message.author.id;

  message.channel

    .awaitMessages({filter: filter, max: 1, time: 10000, errors: ["time"]})
  
  .catch(error => {
    message.reply('Süren doldu!')
  })

    .then(collected => {
    const got = collected.first().content
    if(got.toLowerCase() != 'evet' && got.toLowerCase() != 'hayır') return collected.first().reply('dayı nediyosun evet yada hayır dicen')
    if(got.toLowerCase() == 'hayır') return collected.first().reply('Oylama iptal edildi')
      message.channel

        .send({embeds: [

          new MessageEmbed()

 

            .setColor("RANDOM")

            .setThumbnail(message.author.avatarURL())

            .setTimestamp()

            .setFooter("= = Xaine Bot Oylama Sistemi = =", client.user.avatarURL())

            .addField(`⁉️ __OYLAMA__ ⁉️`, `=> **${question}** `)]}

        )
 

        .then(function(message) {

          message.react("✅").then(sıra => {

            message.react("❌");

          });

        })
    collected.first().delete();
    message.delete();
    za.delete();

    });

};

exports.conf = {

  enabled: true,

  guildOnly: false,

  aliases: ['anket','Anket','ANKET','oylama','Oylama','OYLAMA'],

  permLevel: 0

};

exports.help = {

  name: "oylama",

  description: "oylama.",

  usage: "oylama"

};
