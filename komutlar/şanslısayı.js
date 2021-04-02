const Discord = require('discord.js')

exports.run = function(bot, message) {
    message.channel.send(new Discord.MessageEmbed()
    .setColor(message.guild.me.displayHexColor)
    .setTitle('🔢 işte şanslı sayın: ' + doMagicDiceVoodoo()));

    function doMagicDiceVoodoo() {
        var rand = ['1', '2', '3', '4', '5', '6','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30',];

        return rand[Math.floor(Math.random()*rand.length)];
    }
}

exports.conf = {
  enabled: true,
  aliases: ['şanslısayım','Şanslısayım','ŞANSLISAYIM'],
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'şanslısayı',
  description: 'Şanslısayınızı söyler(ironi)',
  usage: ''
};