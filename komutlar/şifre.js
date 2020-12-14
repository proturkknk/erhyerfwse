const Discord = require("discord.js");
const moment = require("moment");
const ayarlar = require('../ayarlar.json')
const prefix = ayarlar.prefix
const db = require('quick.db')
require("moment-duration-format");

const harfler = [
  'a',
  'A',
  'b',
  'B',
  'c',
  'C',
  'd',
  'D',
  'e',
  'E',
  'f',
  'F',
  'g',
  'G',
  'ğ',
  'Ğ',
  'ı',
  'I',
  'i',
  'İ',
  'j',
  'J',
  'k',
  'K',
  'l',
  'L',
  'm',
  'M',
  'n',
  'N',
  'o',
  'O',
  'ö',
  'Ö',
  'p',
  'P',
  'r',
  'R',
  'ş',
  'Ş',
  's',
  'S',
  't',
  'T',
  'u',
  'U',
  'ü',
  'Ü',
  'v',
  'V',
  'W',
  'w',
  'x',
  'X',
  'y',
  'Y',
  'z',
  'Z',
  '*',
  '-',
  'é',
  '!',
  '^',
  '+',
  '%',
  '&',
  '/',
  '(',
  ')',
  '=',
  '?',
  '_',
  '>',
  '£',
  '#',
  '$',
  '½',
  '{',
  '[',
  ']',
  '}',
  '\\',
  '|',
  ',',
  '`',
  ';',
  ':',
  '.',
  '<',
  '×',
  '⁰',
  '¹',
  '²',
  '³',
  '⁴',
  '⁵',
  '⁶',
  '⁷',
  '⁸',
  '⁹',
  '⅓'
]

exports.run = async (client, msg, args) => {
  
  let liste = await db.fetch('list');
    
  if(liste) {
    if(liste.find(o => o.id === msg.author.id)) {
      
      const kullanıcı = liste.find(o => o.id === msg.author.id)
      const yasaklayan = kullanıcı.yasaklayan
      const sebep = kullanıcı.sebep
      
      const embed = new Discord.RichEmbed()
      .setTitle('Karaliste')
      .setDescription('Neden Karalistem Var?')
      .setThumbnail(msg.author.avatarURL)
      .addField('Karaliste Bilgiler','\nYasaklayan: **'+yasaklayan+'**\nSebep: '+sebep)
      .setColor('RED')
      .setTimestamp()
      
      msg.channel.send(embed)
      return
    }
  }
  
  if(msg.author.id == '756236928512295050') return;
  if(msg.author.bot) return;
  if(msg.channel.type == 'dm') return msg.channel.send('**Bu Komudu DM lerde Kullanamazsın!** :x:').then(m => m.delete(90000))
  if(!args[0]) return msg.channel.send('Doğru Kullanım: `a!şifre <Hane Sayısı>`')
  if(args[1]) return;
  
  let da = true;
  
  harfler.forEach(harf => {
    if(args[0].includes(harf)) {
      da = false
    }
  })
  if(!da) return msg.reply('**Lütfen Bir Sayı Girin!** :x:').then(m => m.delete(90000))
  if(args[0] > 1500) return msg.reply('Okadar Uzun Şifreyi Ne Yapacaksın? `Max Sınır: 1500` :x:')
  
  let pass = "";
  var i;
  for(i = 0; i < args[0]; i++) {
    const random = Math.floor(Math.random() * harfler.length);
    pass = pass + harfler[random]
  }
  let hata = false
    msg.author.send('`' + args[0] + '`** Haneli Şifren:**\n```' + pass + '```').catch(e => {
      msg.reply('**Sana DM Mesajı Gönderemiyorum** :x:')
      hata = true
    })
  setTimeout(function(){
    if(hata) return
    msg.channel.send('**Oluşturulan ' + args[0] + ' Haneli Şifren Direkt Mesajlardan Atıldı** :white_check_mark:')
  },1000)
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['şifre','şifre-oluşturucu','pass','password','sifre','Sifre','Şifre','Pass','Password','PassWord'],
  permLevel:0
};

exports.help = {
  name: 'şifre oluşturucu',
  description: 'şifre oluşturursunuz',
  usage: 'şifre <Hane Sayısı>'
};