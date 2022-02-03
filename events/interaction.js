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
    int.reply('+sunucubilgi yazarak bulunduğun sunucu bilgilerini görebilirsin.')
}

function bilgilendirme(int, bot){
    int.reply('+bilgilendirme yazarak bot hakkında bilgilendirmeleri görebilirsin.')
}

function yardim(int, bot){
    int.reply('+yardım')
}

function vipuyebilgi(int, bot){
     int.reply('VİP Üye Bilgi Komutunu kullanarak VİP üyeliği hakkında bilgi alabilirsin.')
}

function eglencekomutlari(int, bot){
     int.reply('eğlence komutları komutunu kullanarak eğlence komutlarımızı görebilirsin.')
}

function giflikomutlar(int, bot){
      int.reply('Gifli komutları kullanarak gif içeren komutlarımızı görebilirsin.')
}

function bakimdakikomutlar(int, bot){
      int.reply('Bakımdaki Komutlar komutunu kullanarak bakımdaki komutları görebilirsin.')
}

function tedbirler(int, bot){
      int.reply('Tedbirler Komutunu kullanarak Xaine bot ve sizin için aldığımız tedbirleri görebilirsiniz.')
}

function normalkomutlar(int, bot){
      int.reply('Normal Komutlar komutunu kullanarak kişisel komutları görebilirsin.')
}

function secmelioyunlar(int,bot){
      int.reply('Seçmeli oyunlar komutunu ku') 
}

function sartli(int,bot){
  
}

function sartsiz(int,bot){
  
}

function moderasyon(int,bot){
  
}

function sartlar(int,bot){
  const EmbedCrewCode = new MessageEmbed()

    .setColor("RANDOM")
    .setTitle("**  Xaine Bot **")
    .setThumbnail(
      "https://media.giphy.com/media/vPJdwN8Hsu6K4hczUE/giphy.gif"
    ).setDescription(`

**•Xaine Botu kullanmak için şartlarımız**

> Şartlarımız:\n\n 1- Sunucunuzda Xaine Botun ismini hakaret, küfür ve benzeri isimler koymayınız. \n 2-Xaine Botu asla kötü niyet içeren şeylerle kullanmayınız. \n 3- Bota, kullanıcıları, ekibine ve kurucusuna hakaret, küfür, kötü söz söylemek kesinlikle yasaktır! \n 4- Botun kopyasını veya ismi ve pp(profil fotoğrafı) olan botlar oluşturmayın! \n 5- Xaine Botun sahibi sizmişsiniz gibi veya ekibindesiniz gibi ait gibi göstermek yasaktır!
**Şartlarımız bu kadardı. Şartlarımızı kabul edip uymayan kullanıcılarımız botu kullanamayacak ve bot sunucularından atılıcaktır.**

**Şartları kabul ediyorsanız +kabulet yazınız.**

`);

  int.reply({embeds: [EmbedCrewCode]})
}

function kabulet(int,bot){
  
}