const Discord = require('discord.js');

exports.run = (client, message, args) => {
  function şifre(uzunluk, semboller) {

var maske = '';
var sonuc = '';

if (semboller.indexOf('a') > -1) maske += 'abcdefghijklmnopqrstuvwxyz';
if (semboller.indexOf('A') > -1) maske += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
if (semboller.indexOf('0') > -1) maske += '0123456789';
if (semboller.indexOf('_') > -1) maske += '_-*?=/%+';
for (var i = uzunluk; i > 0; --i) 

{
sonuc += maske[Math.floor(Math.random() * maske.length)];
}

return sonuc;
}

    message.channel.send("**(lütfen hesap şifresi yapmayın,bot bunu kendisi rastgele oluşturup atıyor.)Şifreniz Başarıyla Oluşturuldu ・**"+ şifre(9,'0aA_'));
        
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["Şifre-oluştur","şifreoluştur"]
};

exports.help = {
  name: 'şifre-oluştur',
};