const {MessageEmbed} = require('discord.js');
const config = require('../ayarlar.json');
const os = require('os');

module.exports.run = async (client, message, args) => {
    if (message.author.bot) return;
    let prefix = config.prefix;
    if(!message.content.startsWith(prefix)) return;

    let servercount = client.guilds.cache.size;
    let usercount = client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString();
    let channelscount = client.channels.cache.size;
    let arch = os.arch();
    let platform = os.platform();
    let shard = client.ws.shards.size;
    let NodeVersion = process.version;
    let cores = os.cpus().length;

    let stats = new MessageEmbed()
    .setAuthor('Xaine Bot')
    .setTitle(`İşte bilgilerim ${client.user.username}`)
    .setColor('RED')
    .addField("Sunucu sayısı", `${servercount}`, true)
    .addField("Kullanıcı sayısı", `${usercount}`, true)
    .addField("Kanal sayısı", `${channelscount}`, true)
    .setTimestamp()
    .setFooter(`${message.author.tag}`, message.author.displayAvatarURL());
    message.channel.send({embeds: [stats]});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Bot-bilgi','BOT-BİLGİ','bot-bilgi'],
  permLevel: 0
};

exports.help = {
  name: 'bot-bilgi',
  description: 'Xaine Bot bilgilerini gösterir',
  usage: 'bot-bilgi'
};
