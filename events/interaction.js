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
.setDescription("İftar: Belirttiğiniz şehirdeki **İftara Kalan Süre**yi gösterir. ")
.setTimestamp()
int.reply({embeds: [embed]})
}

function sunucubilgi(int, bot){
    const embed = new MessageEmbed()
 .setTitle("sunucubilgi")
.setDescription("Sunucubilgi: Belirttiğiniz sunucu hakkında bilgi verir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function bilgilendirme(int, bot){
    const embed = new MessageEmbed()
 .setTitle("Xaine Bot Bilgilendirme Komutu ")
.setDescription("**9.01.2022** ---> Xaine Botun ismine açılan sahte bot veya botları bizlere bildirebilirsiniz! Bildiren kullanıcılarımıza ödüllerimiz olacak.")
    .setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setTimestamp()
int.reply({embeds: [embed]})
}

function yardim(int, bot){
    const embed = new MessageEmbed()
 .setTitle("yardim")
.setDescription("Yardım: Botta olan komutlar hakkında bilgi verir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function vipuyebilgi(int, bot){
     const embed = new MessageEmbed()
 .setTitle("VİP Üye Bilgi")
.setDescription("Vip-üye-bilgi: VİP Üyeler Hakkında bilgi verir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function eglencekomutlari(int, bot){
     const embed = new MessageEmbed()
 .setTitle("Eğlence Komutları")
.setDescription("eğlence-komutları: Eğlence komutları hakkında bilgi verir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function giflikomutlar(int, bot){
      const embed = new MessageEmbed()
 .setTitle("gifli Komutlar")
.setDescription("Gifli-komutlar-yardım: Gifli Komutları Gösterir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function bakimdakikomutlar(int, bot){
      const embed = new MessageEmbed()
 .setTitle("Bakımdaki Komutlar")
.setDescription("bakımdaki-komutlar: Bakımdaki Komutları Gösterir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function tedbirler(int, bot){
      const embed = new MessageEmbed()
 .setTitle("tedbirler")
.setDescription("Tedbirler: Xaine Bot Ve Sizin İçin Aldığımız Tedbirleri Gösterir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function normalkomutlar(int, bot){
      const embed = new MessageEmbed()
 .setTitle("Normal Komutlar")
.setDescription("Normal-komutlar: Kişisel komutları gösterir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function secmelioyunlar(int,bot){
      const embed = new MessageEmbed()
 .setTitle("Seçmeli Oyunlar Yardım")
.setDescription("Seçmeli-oyunlar-yardım: Seçmeli oyunlar hakkında bilgi verir.")
.setTimestamp()
int.reply({embeds: [embed]})
}

function sartli(int,bot){
  const embed = new MessageEmbed()
 .setTitle("şartlı moderesyon Komutları")
.setDescription("şartlı-Moderasyon Komutları: Kullanmak için şartı olan Moderasyon Komutlarını Gösterir.")
.setTimestamp()
int.reply({embeds: [embed]})

}

function sartsiz(int,bot){
  const embed = new MessageEmbed()
 .setTitle("Şartsız Moderasyon Komutları")
.setDescription("Şartsız-moderasyon-komutları: Kullanmak için şartı olmayan Moderasyon Komutlarını Gösterir.")
.setTimestamp()
int.reply({embeds: [embed]})

}

function moderasyon(int,bot){
    const embed = new MessageEmbed()
 .setTitle("Moderasyon")
.setDescription("Moderasyon: Moderasyon Komutları yardım Menüsünü gösterir.")
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
 .setTitle("kabulet")
.setDescription("Kabulet: Xaine Bot şartlarını kabul edersiniz.")
.setTimestamp()
int.reply({embeds: [embed]})
}