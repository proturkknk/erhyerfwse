const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **Eğlence Bot (V12)** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `+istatistik` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Xaine Bot Normal Komutlar** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» +dondurma :** Dondurma alırsınız..
> **» +xaine :** Botla konuşursunuz.
> **» +atatürk :** Bot sizin için Atatürk sözlerini gösterir.
> **» +aşkölçer :** Belirttiniz kişiyle aranızdaki aşkı ölçer.
> **» +balık-tut :** Balık tutarsınız.
> **» +düello :** Belirttiniz kişiyle düello atarsınız.
> **» +efkarım :** Bot sizin için efkarınızı ölçer.
> **» +fbi :** Bot sizin için fbi baskını yapar.
> **» +tersyazı :** Bot sizin için yazdınız kelimeyi ters yazıya dönüştürür.
> **» +yazıtura :** Yazı-tura oynarsınız.
> **» +öp :** Belirttiniz kişiyi öpersiniz.
> **» +aduketçek :** Aduket oynarsınız..
> **» +ay :** Ay a bakarsınız bakarsınız.
> **» +beşlik :** Belirttiniz kişiyle beşlik çakarsınız.
> **» +dünya :** Dünya ya bakarsınız.
> **» +ejderha-yazı :** Bot sizin yazdınız cümleyi ejderha-yazı olarak değiştirir.
> **» +emojiyazı :** Bot yazdınız cümleyi emoji-yazı olarak değiştirir.
> **» +espri :** Bot sizin için espri yapar.
> **» +kartopu :** Belirttiniz kişiyle kartopu oynarsınız.
**» +kralol :** kral olursunuz.
**» +slots :** Slots oynarsınız.
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
    description: 'Xaine Bot Eğlence komutlar menüsü',
    usage: 'Xaine Bot'
};