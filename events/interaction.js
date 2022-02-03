const {MessageEmbed} = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const dblapi = require('dblapi.js')
const dbl = new dblapi(process.env.dbl_token)
let talkedRecently = new Set();

module.exports = async(int, bot) => {
  const {commandName, ptions} = int
  switch(commandName){
    case "iftar":
      iftar(int, bot)
      break
    case "sunucubilgi":
      sunucubilgi(int, bot)
      break
    case "bilgilendirme":
      bilgilendirme(int, bot)
      break
    case "yardım":
      yardim(int, bot)
      break
    case "vip-üye-bilgi":
      vipuyebilgi(int, bot)
      break
    case "eğlence-komutları":
      eglencekomutlari(int, bot)
      break
    case "gifli-komutlar":
      giflikomutlar(int, bot)
      break
    case "bakımdaki-komutlar":
      bakimdakikomutlar(int, bot)
      break
    case "aldığımız-tedbirler":
      tedbirler(int, bot)
      break
    case "normal-komutlar":
      normalkomutlar(int, bot)
      break
    case "şartlı-moderasyon-komutları":
      sartli(int, bot)
      break
    case "şartsız-moderasyon-komutları":
      sartsiz(int, bot)
      break
    case "moderasyon":
      moderasyon(int, bot)
      break
    case "şartlar":
      sartlar(int, bot)
      break
    case "kabulet":
      kabulet(int, bot)
      break
    default:
      int.reply('bilinmeyen komut')
      break
  }
}

function iftar(int, bot){
  int.reply("iftar") 
}

function sunucubilgi(int, bot){
    int.reply('sunucubilgi')
}

function bilgilendirme(int, bot){
    int.reply('bilgilendirme')
}

function yardim(int, bot){
    int.reply('yardım')
}

function vipuyebilgi(int, bot){
     int.reply('VİP Üye Bilgi')
}

function eglencekomutlari(int, bot){
     int.reply('')
}

function giflikomutlar(int, bot){
  
}

function bakimdakikomutlar(int, bot){
  
}

function tedbirler(int, bot){
  
}

function normalkomutlar(int, bot){
  
}

function secmelioyunlar(int,bot){
  
}

function sartli(int,bot){
  
}

function sartsiz(int,bot){
  
}

function moderasyon(int,bot){
  
}

function sartlar(int,bot){
  
}

function kabulet(int,bot){
  
}