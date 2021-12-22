const {MessageEmbed} = require("discord.js");
const ms = require("ms");
const main = require("../ayarlar.json");
var prefix = main.prefix;

module.exports.run = async (Main, message, args) => {

      let reminderTime = args[0];
      if(!reminderTime) return message.channel.send(`** :warning: Yanlışlık var!**\n**Geçerli Kullanım Örneği:** ${prefix}hatırlat 10m uyandır \n(min = Dakika)`);

      let Bilgi = new MessageEmbed()
      .setColor('RANDOM')
      .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
      .setDescription("**Hatırlatıcı Başarıyla Ayarlandı!**")
      .setTimestamp()
      message.channel.send({embeds: [Bilgi]});

      let reminder = args.slice(1).join(" ");
      
      setTimeout(function(){
        let Zamanlayıcı = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(`${message.author.username}`, message.author.displayAvatarURL({dynamic:true}))
        .addField("Hatırlatıcı... zaman doldu!", `\`\`\`${reminder}\`\`\``)
        .setTimestamp()
        message.channel.send({embeds: [Zamanlayıcı]});
      }, ms(reminderTime));


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hatırlatıcı','Hatırlatıcı','HATIRLATICI'],
  permLevel: 0
};

exports.help = {
  name: 'hatırlat'
};