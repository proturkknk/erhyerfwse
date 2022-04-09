const {MessageEmbed} = require("discord.js");
const axios = require('axios');

exports.run = async (client, message, args) => {
    const city = args[0];
    if (!city) return message.channel.send(':warning: HATA: Lütfen iftar zamanına bakmak istediğiniz şehirin adını giriniz. Örnek: +iftar istanbul');
    axios.get(`  --url 'https://api.collectapi.com/pray/single?ezan=Yats%C4%B1&data.city=istanbul' \}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 0wundItn3wBW8lt7V0NxOK:2yfwbEJlrQJgxPwRMFphPD"
        }
    }).then(res => {
        const messageEmbed = new MessageEmbed().setDescription(`
           > **${city} şehiri için iftar saati ${res.data.result[0].time}** Not: Eğer kalan zamanda undafined yazıyorsa iftar saati geçmiş demektir. Türkiye Saati 00:00'da otomatik diğer günün iftar saatini gösterir. Hayırlı iftarlar!
           \`\`\`Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`
        `);

        message.channel.send({embeds: [messageEmbed]});
    }).catch(err => {
        message.channel.send(':warning: Hata!: Bir sorun ortaya çıktı. Komutu doğru kullandığınızdan emin olun. NOT: Şehirlerin ismini yazarken sorun çıkmaması için baş harflerini küçük yazın. Eğer komutu doğru kullandınızdan eminseniz lütfen bildir komutuyla veya destek sunucumuza gelerek hatayı bildiriniz.');
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