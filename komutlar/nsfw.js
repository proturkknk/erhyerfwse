const superagent = require('superagent');

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://media.giphy.com/media/eK1WwzgLZln2yJ1G8h/giphy.gif')
    .query({ type: '4k'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Kardeşim sana nsfw göstereceğimimi sandın? günah günah neden nsfw bakıcaksın? Ayıp bakma! :x: ")
  }
};
 exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['nsfw','Nsfw','NSFW'],
   permLevel: 0
 };

 exports.help = {
   name: 'nsfw',
   description: '+18 Resim Gösterir',
   usage: 'nsfw'
 };