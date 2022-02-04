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
  const embed = new MessageEmbed()
 .setTitle("iftar")
.setDescription("İftar: Belirttiğiniz şehirde ki **İftara Kalan Süre**yi gösterir. ")
.setTimestamp()
int.reply({embeds: [embed]})
}

function sunucubilgi(int, bot){
    const embed = new MessageEmbed()
 .setTitle("sunucubilgiamk")
.setDescription("suncu bilgi aq")
.setTimestamp()
int.reply({embeds: [embed]})
}

function bilgilendirme(int, bot){
    const embed = new MessageEmbed()
 .setTitle("bilgilendirey")
.setDescription("al bilgilendirme nekadar zor olabilir bunu yapmak aq")
.setTimestamp()
int.reply({embeds: [embed]})
}

function yardim(int, bot){
    const embed = new MessageEmbed()
 .setTitle("yardim")
.setDescription("yardım et serdar")
.setTimestamp()
int.reply({embeds: [embed]})
}

function vipuyebilgi(int, bot){
     const embed = new MessageEmbed()
 .setTitle("vip sjh")
.setDescription("nekadar zor sence")
.setTimestamp()
int.reply({embeds: [embed]})
}

function eglencekomutlari(int, bot){
     const embed = new MessageEmbed()
 .setTitle("eglence moderesyon")
.setDescription("alaq eglence")
.setTimestamp()
int.reply({embeds: [embed]})
}

function giflikomutlar(int, bot){
      const embed = new MessageEmbed()
 .setTitle("gifli moderesyon")
.setDescription("QWEQWEQWEQW")
.setTimestamp()
int.reply({embeds: [embed]})
}

function bakimdakikomutlar(int, bot){
      const embed = new MessageEmbed()
 .setTitle("bakımdaki komutlarza moderesyon")
.setDescription("al")
.setTimestamp()
int.reply({embeds: [embed]})
}

function tedbirler(int, bot){
      const embed = new MessageEmbed()
 .setTitle("tedbir aq")
.setDescription("al 10 saniye mi aldı")
.setTimestamp()
int.reply({embeds: [embed]})
}

function normalkomutlar(int, bot){
      const embed = new MessageEmbed()
 .setTitle("normal komutlaersyon")
.setDescription("aqweqwewqqw")
.setTimestamp()
int.reply({embeds: [embed]})
}

function secmelioyunlar(int,bot){
      const embed = new MessageEmbed()
 .setTitle("secmeli işte aq moderesyon")
.setDescription("AAAAAAAAAAAAAAAAAAAAAAAAAA")
.setTimestamp()
int.reply({embeds: [embed]})
}

function sartli(int,bot){
  const embed = new MessageEmbed()
 .setTitle("şartlı moderesyon")
.setDescription("şartlı Moderasyon Komutları: Kullanmak için şartı olan Moderasyon Komutlarını Gösterir.")
.setTimestamp()
int.reply({embeds: [embed]})

}

function sartsiz(int,bot){
  const embed = new MessageEmbed()
 .setTitle("şartsız moderesyon")
.setDescription("şartsız Moderasyon Komutları: Kullanmak için şartı olmayan Moderasyon Komutlarını Gösterir.")
.setTimestamp()
int.reply({embeds: [embed]})

}

function moderasyon(int,bot){
    const embed = new MessageEmbed()
 .setTitle("moderesyon")
.setDescription("artsız QWEQWEQWEWQQWEQWEQW")
.setTimestamp()
int.reply({embeds: [embed]})
}

function sartlar(int,bot){
  const aq = new MessageEmbed()

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

  int.reply({embeds: [aq]})
}

function kabulet(int,bot){
  const embed = new MessageEmbed()
 .setTitle("NB KABUL ETQWE moderesyon")
.setDescription("AH SERDAR")
.setTimestamp()
int.reply({embeds: [embed]})
}