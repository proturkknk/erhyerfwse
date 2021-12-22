const {MessageEmbed} = require('discord.js')
var steam = require('steam-provider')
var provider = new steam.SteamProvider();

exports.run = (client, message, args) => {
    let game = args[0]
    let steampng = "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png"
    if (!game) return message.reply('Lütfen Steam de olan oyun adı yazın. Örnek: `+steam-oyun Fall Guys`')
    provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
        console.log(results)
    const embed = new MessageEmbed()
    .setAuthor(' Xaine Bot | Steam Store', steampng)
  .setColor("RANDOM")
    .setTitle(result[0].name)
    .addField(`Oyunun ID'sı`, result[0].id)
    .setThumbnail(results.otherData.imageUrl)
    .addField('Türleri', results.genres)
    .addField('Fiyatı', `Normal fiyatı **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`, true)
    .addField('Platformlar', results.otherData.platforms, true)
    .addField('Metacritic Puanı', results.otherData.metacriticScore, true)
    .addField('Etiketleri', results.otherData.features, true)
    .addField('Geliştiricileri', results.otherData.developer, true)
    .setFooter(`Xaine Bot`)
  .setColor("RANDOM")
    message.channel.send({embeds: [embed]}).catch(e => {
        console.log(e)
        message.reply('Bi sorunla karşılaşıldı! Hata oluştu ya da `' + game + '` adlı oyun bulunamadı')
    })
})
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['steam-oyun','Steam-oyun','STEAM-OYUN',],
  permLevel: 0
};

exports.help = {
  name: 'steamoyun',
  description: 'steamstore',
  usage: 'steamoyun'
};