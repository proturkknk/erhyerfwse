exports.run = async (bot, message, args) => {
    var dogruluk = ['Telefonunda arattığın en son şey nedir ?', 'Bir sabah karşı cins olarak uyansaydın ilk yapacağın şey ne olurdu ?', 'Sokakta yere bir şey düşürdüğünde hiç bir şey olmamış gibi alıp ağzına attın mı ?', 'Dışarıda en son ne yaptın?', 'En son ne zaman dışarı çıktın?']
    var cesaret = ['Bugün yaptığın bir şeyle alakalı uydurma kısa, komik bir hikaye anlat', 'Whatsappındaki son mesajlaşmanı bize oku',]
    var dogrulukcevap = dogruluk[Math.floor(Math.random() * dogruluk.length)];
    var cesaretcevap = cesaret[Math.floor(Math.random() * cesaret.length)]
    message.channel.send('\`Doğruluk\` mu yoksa \`cesaret\` mi?')
    let uwu = false;
    while (!uwu) {
        const response = await message.channel.awaitMessages({filter: neblm => neblm.author.id === message.author.id, max: 1, time: 30000 })
        if(!response.first()) return message.reply('Süren doldu')
        const choice = response.first().content
        if (choice == 'doğruluk' || choice == 'd') return message.channel.send(`${dogrulukcevap}`)
        if (choice !== 'cesaret' && choice !== 'c') {
            message.channel.send(`Lütfen sadece **doğruluk (d)** veya **cesaret (c)** ile cevap verin.`) 
        }
        if (choice == 'cesaret' || choice == 'c') uwu = true
    }
    if (uwu) {
        message.channel.send(`${cesaretcevap}`)
    }
}
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['dc', 'doğruluk-cesaret','Doğruluk-cesaret','DOĞRULUK-CESARET'],
    permLevel: 0
};
exports.help = {
    name: 'doğrulukcesaret',
    description: 'Doğruluk cesaret oynarsınız',
    usage: 'doğrulukcesaret'
};
