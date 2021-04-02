const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {

request(`https://no-api-key.com/api/v1/animals/panda`, function (error, response, body) {
    if (error) return console.log('Error:', error); 
    else if (!error) { 
        const fury = new Discord.MessageEmbed()
          .setColor('RANDOM'


}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['panda','Panda','PANDA'],
  permLevel: 0
};

exports.help = {
    name: 'panda',
  description: 'Xaine bot panda komutu',
  usage: 'sa'
};
