const {MessageEmbed} = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬[** ©️ **Elitra Bot (V13)** ©️ **]▬▬▬**  \n\n> :floppy_disk: `+is` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬[ :closed_lock_with_key: ** <:civcivkalp:853213881111150642> Xaine Bot Moderasyon Komutları** :teddy_bear: ]▬


**Merhaba! Lütfen gitmek istediğiniz moderasyon seçeneğini yazınız.**

\n Şartlı moderasyon komutlarımıza gitmek için: +şartlı-moderasyon-komutları 

\n Şartsız moderasyon komutlarımıza gitmek için ise +şartsız-moderasyon-komutları
 
\n **Dikkat!: Prefix sizin bulunduğunuz sunucuda hangisi ile ayarlıysa o prefixi yazınız.**



**▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬**
\n **DİKKAT!: LÜTFEN DİKKATLİCE OKUYUNUZ! Botda oluşan teknik nedenden dolayı bot moderasyon yetkisi alamadı buda moderasyon komutlarını kullanamazsınız anlamına geliyor. Sorun çözülmüştür Lütfen Xaine Botu sunucudan atıp tekrardan eklerseniz seviniriz. İyi günler!**
\n > :dizzy: **Fikirleriniz bizim için çok ** **değerlidir, bildir komutuyla belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Kod Paylaşım Ve Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kekc2pU)**
> :round_pushpin: **Ana yardım menüsüne dönmek için: +yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**
`)
.setImage(`https://media.giphy.com/media/YKqCL6KfuCJOdh2d8p/giphy.gif`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send({embeds: [EmbedFwhyCode]})

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['moderasyon','Moderasyon','MODERASYON',], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'moderasyon', 
    description: 'Xaine Bot moderasyon komutları',
    usage: 'Xaine Bot'
};