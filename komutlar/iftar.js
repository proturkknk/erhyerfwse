const Discord = require("discord.js");
const axios = require('axios');

exports.run = async (client, message, args) => {
    const city = args[0];
const embed = new Discord.MessageEmbed()
   .setAuthor('HATA', message.author.avatarURL())
   .setColor('RANDOM') 
     .setDescription(`
  Şehir adı girmelisiniz!

  **Örnek Kullanım:** +iftar istanbul

`)


   .setTimestamp()
   .setFooter(`${message.author.username} Başarıyla İftar Komutunu Kullandı!`, message.author.avatarURL())


   .setThumbnail(client.user.avatarURL())
    if (!city) return message.channel.send(embed);
    axios.get(`https://api.collectapi.com/pray/single?ezan=Ak%C5%9Fam&data.city=${city.toLowerCase()}`, {
        headers: {
            "content-type": "application/json",
            "authorization": "apikey"
        }
    }).then(res => {
const lauraaaaa = new Discord.MessageEmbed()
   .setAuthor('BAŞARILI!', message.author.avatarURL())
   .setColor('RANDOM') 
     .setDescription(` \`\`\`${city} Şehri için iftar saati ${res.data.result[0].time}.\`\`\`
           
  \`\`\`Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`

`)
.setTimestamp()
.setFooter(`${message.author.username} Başarıyla İftar Komutunu Kullandın!`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
    message.channel.send(lauraaaaa);
    }).catch(err => {
const codare = new Discord.MessageEmbed()
   .setAuthor('HATA!', message.author.avatarURL())
   .setColor('RANDOM') 
   .setDescription(`:warning:  Bir sorun ortaya çıktı. Komutu doğru kullandığınızdan emin olun.

  **Örnek Kullanım:** +iftar istanbul`)
   .setTimestamp()
   .setFooter(`${message.author.username} Başarıyla İftar Komutunu Kullandı!`, message.author.avatarURL())
   .setThumbnail(client.user.avatarURL())
        message.channel.send(codare);
        console.log(err);
    });
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: "iftar"
};
