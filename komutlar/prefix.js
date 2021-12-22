const db = require("quick.db");

const {prefix} = require('../ayarlar.json')

exports.run = async (client, message, args) => {

   if (!message.member.permissions.has("ADMINISTRATOR")) {

   return message.channel.send("Prefix'i değiştirmeniz için \`YÖNETİCİ\` yetkiniz olması lazım!");

    }

    if (!args[0]) {

    return message.channel.send("Lütfen bir prefix giriniz.");

    }

    if (args[1]) {

    return message.channel.send("İkinci bir prefix yapamazsın!");

    }

    if (args[0].length > 3) {

    return message.channel.send("3 karakterden uzun bir prefix yapamazsınızız!");

    }

    if (args.join("") === prefix) {

    db.delete(`prefix_${message.guild.id}`);

    return await message.channel.send("Prefix sıfırlandı!");

    }

    db.set(`prefix_${message.guild.id}`, args[0]);

    await message.channel.send(`Bot prefixi değiştirildi. Yeni prefix: \`${args[0]}\``);

    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['prefix','Prefix','PREFİX'],
  permLevel: 0
};

exports.help = {
  name: "prefix",
  description: "Xaine Bot Prefix Komutu",
  usage: "prefix",
  category: "moderasyon"
};