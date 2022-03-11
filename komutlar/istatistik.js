const {MessageEmbed, version} = require("discord.js");
const moment = require("moment");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
  const payidarzaman = moment

    .duration(client.uptime)
    .format(" D [gün], H [saat], m [dakika], s [saniye]");
  const istatistikler = new MessageEmbed()
    .setColor("RANDOM")
    .addField("**__Ping__**",` :clock: Mesaj Gecikmesi: ${new Date().getTime() - message.createdTimestamp} ms\n :person_running: Bot Gecikmesi: ${client.ws.ping}ms`, true)
    .addField("**__ Kullanıcı Sayısı__** ",` :busts_in_silhouette: ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}`, true) 
    .addField("**__Sunucu Sayısı__**", ` :clipboard: ${client.guilds.cache.size.toLocaleString()}`, true)
    .addField("**__Kanal Sayısı__**", `${client.channels.cache.size.toLocaleString()}`, true)
    .addField("**__Aktiflik__**", ` :pick: ${payidarzaman}`, true)
    .addField("**__Node.JS Versiyon__**", ` :boom: ${process.version} `,  true ) 
    .addField("**__Ram Kullanımı__**", `${(process.memoryUsage().heapUsed / 1024 / 512).toFixed(2) + " MB"}`, true)
    .addField("**__Discord.JS__**", `${version}`, true)
    .addField("**__Konum__**", `Türkiye (Turkey) :flag_tr:`, true)
    .addField("**__Bot Sahibi__**", `<:civcivkalp:853213881111150642> ! TREFAX#0362`, true)
    .addField("**__Geliştiriciler__**", ` <:civcivkalp:853213881111150642>  ! TREFAX#0362 `, true)

  return message.channel.send({embeds: [istatistikler]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['is','İs','İS','İstatistik','istatistik','İSTATİSTİK'],
  permLevel: 0
};

exports.help = {
  name: "is",
  description: "is", 
  usage: "is"
};
