const {MessageEmbed} = require('discord.js');
const weather = require('weather-js');

exports.run = (client, message, args) => {
  weather.find({search: args.join(" "), degreeType: 'C'}, function(err, result) {
      if (err) message.channel.send(err);
      if (result === undefined || result.length === 0) {
          message.channel.send(new MessageEmbed().setDescription('Lütfen şehir ismi giriniz.').setColor('RANDOM'));
          return;
      }
      var current = result[0].current;
      var location = result[0].location;
      const embed = new MessageEmbed()
          .setDescription(`**${current.skytext}**`)
          .setAuthor(`${current.observationpoint} için hava durumu`)
          .setThumbnail(current.imageUrl)
          .setColor('RANDOM')
          .addField('● Zaman Dilimi',`UTC${location.timezone}`, true)
          .addField('● Derece Türü',location.degreetype, true)
          .addField('● Sıcaklık',`${current.temperature} Derece`, true)
          .addField('● Hava', `${current.feelslike}`, true)
          .addField('● Rüzgar',current.winddisplay, true)
          .addField('● Nem', `${current.humidity}%`, true)
          message.channel.send({embeds: [embed]});
  })
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Hava-durumu','hava-durumu','HAVA-DURUMU'],
  permLevel: "0"
};

exports.help = {
  name: "havadurumu",
  description: "hava durumunu gösterir",
  usage: "havadurumu"
}