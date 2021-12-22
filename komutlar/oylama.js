
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

 

  message.channel.send(

    `everyone - here atılsın mı?\n**evet** veya **hayır** olarak cevap veriniz. \n Cevap verme süreniz 10 saniye`

  );

  message.channel

    .awaitMessages(response => response.content === "evet", {

      max: 1,

      time: 10000,

      errors: ["time"]

    })

    .then(collected => {

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

        .then(everyone => {

          message.channel.send(" @everyone @here ").then(m => m.delete(50));

        });

    });

  message.channel

    .awaitMessages(response => response.content === "hayır", {

      max: 1,

      time: 10000,

      errors: ["time"]

    })

    .then(collected => {

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

        });

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
