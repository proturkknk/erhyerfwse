const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬[** ©️ **Xaine Bot (V12)** ©️ **]▬▬▬**  \n\n> :floppy_disk: `+is` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬[ :closed_lock_with_key: **Xaine Bot Moderasyon Komutları** :teddy_bear: ]▬

> **» +mute :** Belirttiniz kişiyi sunucuda susturursunuz.
> **» +muterole :** Mute rolünü ayarlarsınız.
> **» +ban :** Belirttiniz kişiyi sunucudan yasaklarsınız.
> **» +kick :** Belirttiniz kişiyi  sunucudan atarsınız.
> **» +kilit :** Bulunduğunuz kanalın mesaj yazımını kapatır.
> **» +kilitaç :** Bulunduğunuz kanalın mesaj yazımını açar.
> **» +reklam-engel :** Reklam engeli açarsınız veya kapatırsınız.
> **» +küfür-engel aç :** Küfür engeli açarsınız.
> **» +küfür-engel kapat :** Küfür engeli kapatırsınız.
> **» +sil :** Belirttiniz sayı kadar mesaj siler. (Limit: 100)
> **» +kullanıcı-mesaj-sil :** Bellirttiniz kullanıcının o gün içindeki tüm mesajlarını siler.
> **» +uyar :** Belirttiniz kullanıcıyı uyarırsınız.
> **» +nuke :** Kanalı tekrar kurar ve tüm mesajları siler.
> **» +prefix :** Botun prefixini değiştirirsiniz.
> **» +yavaşmod :** Bulunduğunuz kanalın yazma limitini belirlersiniz.
**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz bizim için çok ** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Kod Paylaşım Ve Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kekc2pU)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: +yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**
`)
.setImage(`https://media.giphy.com/media/YKqCL6KfuCJOdh2d8p/giphy.gif`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['moderasyon-komutları','Moderasyon-komutları','MODERASYON-KOMUTLARI','moderasyon','Moderasyon','MODERASYON'], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'Xaine Bot moderasyon komutları',
    usage: 'Xaine Bot'
};