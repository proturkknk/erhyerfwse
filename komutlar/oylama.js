const CodAre = require('discord.js');

 exports.run = (client, message, args) => {

if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(`Bu Komutu Kullanailmek İçin \`MANAGE_GUILD\` yetkisine sahip olmalısın!`);
   message.delete();

   let emirhan = args.join(' ');

   if (!emirhan) {
const codare = new CodAre.MessageEmbed()
.setAuthor(message.author.username)
.setDescription(`Lütfen bir yazı belirtin!`)
      .setTimestamp()
message.channel.send(codare)


     message.channel.send(new CodAre.MessageEmbed()
  .setColor("BLUE")
.setFooter(`${message.author.tag} Tarafından anket yapıldı!`)
.setDescription(soru)).then(function(tanersins) {
tanersins.react('✅');
tanersins.react('❌');

});
 };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['anket'],
      permLevel: 0
};

exports.help = {
  name: 'oylama',
  description: 'Sunucuda oylama yaparsınız',
  usage: 'oylama '
};