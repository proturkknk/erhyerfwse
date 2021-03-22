const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Eğlence Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `+istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» +avatar :** Avatarınızı gösterir.
> **» +davet :** Davet linklerini gösterir.
> **» +yılbaşı :** Yılbaşına kalan zamanı gösterir.
> **» +nuke :** Kanalı tekrar kurar ve tüm mesajları siler.
> **» +hesapla :** Matematik işlemi hesaplarsınız.
> **» +havadurumu :** Belirttiniz bölgenin hava durumuna bakarsınız.
> **» +is :** Botun istatistik bilgilerine bakarsınız.
> **» +bildir :** Şikayet-öneri de bulunursunuz.
> **» +korona :** Belirttiniz ülkenin korona virüs bilgilerine bakarsınız (lütfen ingilizce olarak ülkeleri yazın.)
> **» +kilit :** Belirttiniz kanala mesaj yazılmasını engeller.
> **» +kilitaç :** Belirttiniz kanalın mesaj yazımını açar.
> **» +ping :** Botun pingine bakarsınız.
> **» +saat :** Saatin kaç olduğuna bakarsınız.
> **» +yapımcım :** Botun yapımcısına bakarsınız.
> **» +token :** Botun tokenine bakarsınız :D.
> **» +sunucubilgi :** Bulundunuz sunucu bilgilerini bot sizin için gösterir.
> **» +ekibimiz :** Xaine Bot Ekibini gösterir.
> **» +mcskin :** Belirttiniz ismin Minecraft skinine (karakter) bakarsınız.
> **» +uyar :** Belirttiniz kullanıcıyı uyarırsınız.
**» +sözlük :** Belirttiniz kelimenin sözlük anlamına bakarsınız.
**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kekc2pU)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: +yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/https://discord.gg/Kekc2pU)** **•** **
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; //FwhyCode

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'normalkomutlar', 
    description: 'Xaine Bot normal komutlar menüsü',
    usage: 'Xaine Bot'
};