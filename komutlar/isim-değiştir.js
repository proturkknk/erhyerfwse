const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix

exports.run = async (client, message, args) => {

if (!message.member.permissions.has("MANAGE_GUILD")) return message.reply(`Bu Komutu Kullanmak İçin **Yetkili** Olmalısın!`); 

let isim = args.slice(1).join(' ');
let kullanici = message.mentions.users.first();
  
if(!kullanici) return message.reply(`Lütfen bir kullanıcı giriniz. \nDoğru Kullanım; \`${prefix}isim-değiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
  
if(!isim) return message.reply(`:warning: Hata!: Lütfen bir kullanıcı adı giriniz! \nDoğru Kullanım; \`${prefix}isimdeğiştir @${client.user.username}#${client.user.discriminator} <yeni isim>\``)
if(isim.length > 32) return message.reply(`:warning: Hata!: Lütfen \`32\` karakteri geçmeyecek şekilde bir isim giriniz.`)
  
message.guild.members.cache.get(kullanici.id).setNickname(`${isim}`)
message.channel.send(`Başarılı! :white_check_mark: \`${kullanici.username}\` adlı kişinin kullanıcı adı \`${isim}\` olarak değiştirildi. :label: Dikkat!: :warning: Eğer isim değişmediyse lütfen botun rolünü en üste alınız ve tekrar deneyiniz.`)
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['isimdegistir','İsim-değiştir','isim-değiştir','İSİM-DEĞİŞTİR'],
    permLevel: 0
}

exports.help = {
  name: 'isimdeğiştir',
  description: 'Belirttiğiniz kullanıcının kullanıcı adını değiştirir.',
  usage: 'isimdeğiştir @kullanıcı <kullanıcı adı>',
  category: "moderasyon"
}