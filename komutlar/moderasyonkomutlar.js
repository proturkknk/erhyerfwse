const {MessageEmbed} = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬[** ©️ **Elitra Bot ** ©️ **]▬▬▬**  \n\n> :floppy_disk: `+is` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬[ :closed_lock_with_key: **<:civcivkalp:853213881111150642>  Xaine Bot Moderasyon Komutları** :teddy_bear: ]▬

> **» +ban :** Belirttiğiniz kişiyi sunucudan yasaklarsınız.
> **» +kick :** Belirttiğiniz kişiyi  sunucudan atarsınız.
> **» +kilit :** Bulunduğunuz kanalın mesaj yazımını kapatır.
> **» +kilitaç :** Bulunduğunuz kanalın mesaj yazımını açar.
> **» +reklam-engel :** Reklam engeli açarsınız veya kapatırsınız.
> **» +spam-engel :** Spam engeli açarsınız veya kapatırsınız.
> **» +küfür-engel aç :** Küfür engeli açarsınız.
> **» +küfür-engel kapat :** Küfür engeli kapatırsınız.
> **» +sa-as :** Sa-as sistemini açarsınız veya kapatırsınız.
> **» +kullanıcı-mesaj-sil :** Bellirttiğiniz kullanıcının o gün içindeki tüm mesajlarını siler.
> **» +prefix :** Botun prefixini değiştirirsiniz.
> **» +isim-değiştir :** Belirttiğiniz kullanıcının ismini değiştirir.
**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**
**DİKKAT!: LÜTFEN DİKKATLİCE OKUYUNUZ! Botda oluşan teknik nedenden dolayı bot moderasyon yetkisi alamadı buda moderasyon komutlarını kullanamazsınız anlamına geliyor. Sorun çözülmüştür Lütfen Botu sunucudan atıp tekrardan eklerseniz seviniriz. İyi günler!**
> :dizzy: **Fikirleriniz bizim için çok ** **değerlidir, bildir komutuyla belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Kod Paylaşım Ve Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kekc2pU)**
> :round_pushpin: **Ana yardım menüsüne dönmek için: +yardım**
> :airplane: **Aktif discord.js sürümüm: v16.12.0**
`)
.setImage(`https://media.giphy.com/media/BTQg35NV1TFyP03vGu/giphy.gif`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send({embeds: [EmbedFwhyCode]})

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['şartlı-moderasyon-komutları','Şartlı-moderasyon-komutları','ŞARTLI-MODERASYON-KOMUTLARI',], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'şartlı-moderasyon-komutları', 
    description: 'Xaine Bot moderasyon komutları',
    usage: 'Xaine Bot'
};