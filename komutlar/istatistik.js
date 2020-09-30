const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const istatistikler = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setFooter('Istatistik', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "ever_Sitrey!")
  .addField("»  **Geliştirici** ","<@675349659040088109>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", matador)
  .addField("» **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](LİNK)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl](LİNK)", )
  .addField("**» Oylama Sayfası**", " [Botu votele](LİNK)", )
 return message.channel.send(matador);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'stats', 'bot', 'botbilgi'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot Stats",
  usage: "istatistik"
};