const {MessageEmbed} = require("discord.js");
const axios = require('axios');

exports.run = async (client, message, args) => {
    const city = args[0];
    if (!city) return message.channel.send(':warning: HATA: Lütfen iftar zamanına bakmak istediğiniz şehirin adını giriniz. Örnek: +iftar istanbul');
    axios.get(`https://api.collectapi.com/pray/single?ezan=Ak%C5%9Fam&data.city=${city.toLowerCase()}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 0wundItn3wBW8lt7V0NxOK:2yfwbEJlrQJgxPwRMFphPD"
        }
    }).then(res => {
        const messageEmbed = new MessageEmbed().setDescription(`
           > **${city} şehiri için iftar saati ${res.data.result[0].time}** Not: Eğer kalan zamanda 'undafined' yazıyorsa iftar saati geçmiş demektir. Türkiye Saati 00:00'da otomatik olarak diğer günün iftar saatini gösterir. Hayırlı Ramazanlar!
           \`\`\`Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`
        `);

        message.channel.send({embeds: [messageEmbed]});
    }).catch(err => {
        message.channel.send(':warning: Hata!: Bir sorun ortaya çıktı. Komutu doğru kullandığınızdan emin olun. NOT: Şehirlerin ismini yazarken sorun çıkmaması için baş harflerini ve şehir isminin tamamını küçük harflerle yazın. Eğer komutu doğru kullandığınızdan eminseniz lütfen bildir komutuyla veya destek sunucumuza gelerek hatayı bildiriniz.');
        console.log(err);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["iftar","İftar","İFTAR"],
    permLevel: 0
};

exports.help = {
    name: "iftar"
};