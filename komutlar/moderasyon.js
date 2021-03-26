const Discord = require ("discord.js");

exports.run = (client, message) => {

const EmbedFwhyCode = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle("**▬▬▬[** ©️ **Xaine Bot (V12)** ©️ **]▬▬▬**  \n\n> :floppy_disk: `+is` **Botun istatistik bilgilerini açar.** \n> :floppy_disk: **Şuanda kullanılan prefix** `+`")
.setThumbnail("https://cdn.discordapp.com/attachments/655459488236568597/655887650494087178/loading_1.gif")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Xaine Bot Moderasyon Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

> **» +mute :** Belirttiniz kişiyi susturursunuz.
> **» +muterole :** Mute rolünü ayarlarsınız.
> **» +kilit :** Bulunduğunuz kanalın mesaj yazımını kapatır.
> **» +kilitaç :** Bulunduğunuz kanalın mesaj yazımını açar.
> **» +uyar :** Belirttiniz kullanıcıyı uyarırsınız.
> **» +nuke :** Kanalı tekrar kurar ve tüm mesajları siler.
*» +prefix :** Botun prefixini değiştirirsiniz.
**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

> :dizzy: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
> :open_file_folder: **Botun Kod Paylaşım Ve Destek Sunucusuna Gelmek İçin [Tıkla!](https://discord.gg/Kekc2pU)**
> :round_pushpin: **Komut hakkında detaylı bilgi için: +yardım**
> :airplane: **Aktif discord.js sürümüm: v12.2.0**
**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/https://discord.gg/Kekc2pU)** **•** **
`)
.setImage(`https://media.giphy.com/media/9CkIFgNLtPFAiiCqGN/giphy.gif`)
 
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
    name: 'moderasyon', 
    description: 'Xaine Bot moderasyon komutları',
    usage: 'Xaine Bot'
};