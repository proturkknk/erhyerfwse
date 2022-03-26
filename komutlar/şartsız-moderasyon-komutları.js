const {MessageEmbed} = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬[** ©️ **Fleix Bot (V12)** ©️ **]▬▬▬**  \n\n> :floppy_disk: `+is` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬[ :closed_lock_with_key: **<:civcivkalp:853213881111150642> Xaine Bot Moderasyon Komutları** :teddy_bear: ]▬

> **» +uyar :** Belirttiğiniz kullanıcıyı uyarırsınız.
> **» +sil :** Bulunduğunuz kanalın belirttiniz miktardaki mesajları siler.
> **» +mute :** Belirttiğiniz kişiyi sunucuda susturursunuz. (BAKIMDA!)
> **» +unmute :** Belirttiğiniz kişinin mutesini (susturulmasını) kaldırırsınız.
> **» +yavaşmod :** Bulunduğunuz kanalın yazma limitini(Süresini) belirlersiniz.
> **» +nuke :** Tüm mesajları siler ve kanalı tekrar kurar.
**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**
**DİKKAT!: LÜTFEN DİKKATLİCE OKUYUNUZ! Botda oluşan teknik nedenden dolayı bot moderasyon yetkisi alamadı buda moderasyon komutlarını kullanamazsınız anlamına geliyor. Sorun çözülmüştür Lütfen Botu sunucudan atıp tekrardan eklerseniz seviniriz. İyi günler! (10 temmuz 2021 sonrası botu sunucudan atıp ekleyenlerde bu sorun yoktur. Lütfen çalışmıyorsa botu atıp geri ekleyin.)**
> :dizzy: **Fikirleriniz bizim için çok ** **değerlidir, bildir komutuyla belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Kod Paylaşım Ve Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kekc2pU)**
> :round_pushpin: **Ana yardım menüsüne dönmek için: +yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**
`)
.setImage(`https://media.giphy.com/media/BTQg35NV1TFyP03vGu/giphy.gif`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send({embeds: [EmbedFwhyCode]})

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['şartsız-moderasyon-komutları','Şartsız-moderasyon-komutları','ŞARTSIZ-MODERASYON-KOMUTLARI',], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'şartsız-moderasyon-komutları', 
    description: 'Xaine Bot moderasyon komutları',
    usage: 'Fleix Bot'
};