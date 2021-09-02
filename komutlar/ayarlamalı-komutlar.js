const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setAuthor('**▬▬▬[** ©️ **Xaine Bot (V12)** ©️ **]▬▬▬**  \n\n> :floppy_disk: `+is` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`','https://nolur.com/nah.jpg')
.setTitle("")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

[ :closed_lock_with_key: ** <:civcivkalp:853213881111150642> Xaine Bot Moderasyon Komutları** :teddy_bear: ]

> **[sa-as]**() → Sa-as sistemini açıp kapatmanızı sağlar

> **[küfür-engel]**() → Küfür engeli açıp kapatmanızı sağlar.

Not: **küfür-engel** komutu şartlı moderasyon komutudur.

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

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: ['ayarlamalı-komutlar','Ayarlamalı-komutlar','AYARLAMALI-KOMUTLAR',], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'ayarlamalı-komutlar', 
    description: 'Xaine Bot ayarlamalı komutlar',
    usage: 'Xaine Bot'
};