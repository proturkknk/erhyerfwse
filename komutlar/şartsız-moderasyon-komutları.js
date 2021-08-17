const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬[** ©️ **Xaine Bot (V12)** ©️ **]▬▬▬**  \n\n> :floppy_disk: `+is` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬[ :closed_lock_with_key: **Xaine Bot Moderasyon Komutları** :teddy_bear: ]▬

> **» +mute :** Belirttiğiniz kişiyi sunucuda susturursunuz.(Bakımda)
**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**
**DİKKAT!: LÜTFEN DİKKATLİCE OKUYUNUZ! Botda oluşan teknik nedenden dolayı bot moderasyon yetkisi alamadı buda moderasyon komutlarını kullanamazsınız anlamına geliyor. Sorun çözülmüştür Lütfen Xaine Botu sunucudan atıp tekrardan eklerseniz seviniriz. İyi günler! (10 temmuz 2021 sonrası botu sunucudan atıp ekleyenlerde bu sorun yoktur. Lütfen çalışmıyorsa botu atıp geri ekleyin.)**
> :dizzy: **Fikirleriniz bizim için çok ** **değerlidir, bildir komutuyla belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Kod Paylaşım Ve Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kekc2pU)**
> :round_pushpin: **Ana yardım menüsüne dönmek için: +yardım**
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
    aliases: ['şartsız-moderasyon-komutları','Şartsız-moderasyon-komutları','ŞARTSIZ-MODERASYON-KOMUTLARI',], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'Xaine Bot moderasyon komutları',
    usage: 'Xaine Bot'
};