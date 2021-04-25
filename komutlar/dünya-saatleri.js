const Discord = require("discord.js");
const axios = require('axios');

var data = null;

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
  if (this.readyState === this.DONE) {
    console.log(this.responseText);
  }
});

xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("authorization", "apikey 0wundItn3wBW8lt7V0NxOK:2yfwbEJlrQJgxPwRMFphPD");

xhr.send(data)
        const messageEmbed = new Discord.MessageEmbed().setDescription(`
           > **${city}** şehri için iftar saati **${res.data.result[0].time} Not: Eğer kalan zamanda undafined yazıyorsa iftar saati geçmiş demektir. Saat 00:00 da otomatikmen diğer günkü iftar saatini gösterir. Hayırlı iftarlar!**
           \`\`\`Kalan Süre: ${res.data.result[0].hour} ${res.data.result[0].min}\`\`\`
        `);

        message.channel.send(messageEmbed);
        message.channel.send('Bir sorun ortaya çıktı.Komutu doğru kullandığınızdan emin olun.');
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