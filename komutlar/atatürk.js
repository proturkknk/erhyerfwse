const {MessageEmbed} = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new MessageEmbed()
    .setAuthor('Mustafa Kemal Atatürkü Saygıyla Anıyoruz.')
    .setColor(3447003)
        .setImage(`https://i.hizliresim.com/8CIYMl.gif`)
    return message.channel.send({embeds: [vatan]});
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Atatürk','ATATÜRK','Atatürk'],
  permLevel: 0
};
//KobsCode
exports.help = {
  name: 'atatürk',
  description: '',
  usage: ''
};