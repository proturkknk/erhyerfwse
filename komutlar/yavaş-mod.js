const Discord = require('discord.js');
const request = require('request')

exports.run = async(client, message, args) => {
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`Doğru kullanım: \`!yavaşmod [0/180]\``)
                .setColor("RANDOM")
                .setTimestamp()
            message.channel.send({embed})
            return
          }
if (limit > 3600) {
    return message.channel.send(new Discord.MessageEmbed().setDescription(" :x: Hata!: Süre limiti maksimum **3600** saniye olabilir.").setColor("RANDOM"));
}
   message.channel.send(new Discord.MessageEmbed().setDescription(`Yazma süre limiti **${limit}** saniye olarak ayarlanmıştır.`).setColor("RANDOM"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["slow-mode", "slowmode", "yavas-mod", 'yavasmod', 'yavaşmod','Yavaşmod','YAVAŞMOD'],
  permLevel: 3,
};

exports.help = {
  name: 'yavaş-mod',
  description: 'Sohbete yazma sınır (süre) ekler.',
  usage: 'yavaş-mod [1/120]',

};