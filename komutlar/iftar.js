const Discord = require("discord.js");
const axios = require('axios');

exports.run = async (client, message, args) => {
    const city = args[0];
    if (!city) return message.channel.send('Lütfen şehir adı giriniz.');
    axios.get(`https://api.collectapi.com/pray/single?ezan=Ak%C5%9Fam&data.city=${city.toLowerCase()}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey 0wundItn3wBW8lt7V0NxOK:2yfwbEJlrQJgxPwRMFphPD"
        }
    }).then(res => {
        const messageEmbed = new Discord.MessageEmbed().setDescription(`
           > **${city}** şehri için iftar saati **${res.data.result[0].time} Not: Eğer kalan zamanda undafined yazıyorsa iftar saati geçmiş demektir. Saat 00:00 da otomatikmen diğer günkü iftar saatini gösterir. Hayırlı iftarlar!**
           \`\`\`Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`
        `);

        message.channel.send(messageEmbed);
    }).catch(err => {
        message.channel.send(':warning: Hata!: Bir sorun ortaya çıktı. Komutu doğru kullandığınızdan emin olun. Eğer komutu doğru kullandınızdan eminseniz lütfen bildir komutuyla veya destek sunucumuza gelerek hatayı bildiriniz.');
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