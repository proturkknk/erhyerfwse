const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedPinCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬▬▬▬[** ©️ **FwhyCode Bot** ©️ **]▬▬▬▬▬▬**  \n\n> :floppy_disk: `!istatistik` **Botun İstatistiklerine Bakarsınız!** \n> :floppy_disk: **Prefixim:** `!`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» !aduketçek :** aduket çekersiniz.
> **» !balık-tut :** Balık Tutarsınız.
> **» !beşlik :** Etiketlediğiniz Kişiyle Beşlik Çakarsınız.
> **» !ara155 :** Polisi Arar (ciddiye almayın).
> **» !efkarım :** Bot Efkarınızı ölçer.
> **» !ejderha-yazı :** Ejderha Logosu Yaparsınız.
> **» !espri :** Bot Espri yapar.
> **» !hesapla :** Bot Belirtilen işlemi yapar.
> **» !kartopu :** Etiketlediğiniz Kişiye KarTopu Atarsınız.
> **» !kaç-cm :** Bot Malafatını Söyler.
> **» !kralol :** Kral Olursunuz.
> **» !tokat :** Bot Belirtilen kişiyi, Tokatlar!.
> **» !yazıtura :** Bot Yazı-Tura atar.
> **» !yılbaşı :** Yılbaşının kutlanmasına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.
> **» !öp :** İstediğiniz kişiyi öpersiniz..
> **» !şekerye :** Şeker Yersiniz!.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/pCemfHW)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: !yardım**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/pCemfHW)** **•** **[Botun Davet Linki](https://www.discord.com/)** **•** **[Web-Site](https://www.discord.com/)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(EmbedFwhyCode)
.then; 

};
exports.conf = {
    enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  
  exports.help = {
    name: 'yardım', 
    description: 'The Help Command',
    usage: 'help'
};