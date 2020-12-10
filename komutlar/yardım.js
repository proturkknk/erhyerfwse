const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmatador = new Discord.MessageEmbed()

.setColor("RED")
.setTitle("**▬▬▬▬▬▬[** ©️ **Seidou-Chan** ©️ **]▬▬▬▬▬▬**  \n \n **Şuanda kullanılan prefix** `u!`")
.setThumbnail("")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

  **»  *fbi :**  FBİ gifi atar .
  **»  *aşkölçer :**  Aşkınızı ölçer(ironi) . 
**»  *aduketçek :**  Etiketlediğiniz kişiye aduket çekersiniz .
 **»  *ara155 :** Polisi aramanıza yarar :.
 **»  *ay :**  Ay gifi atar .
 **»  *balık-tut :** Denizde balık tutarsınız.
 **»  *beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
  **»  *dünya :** Dünya gifi atar.
  **»  *efkarım :** Şu anda olan efkarınızı ölçersiniz(ironi).
 **»  *ejderha-yazı :** Ejderha temalı logo üretirsiniz.
 **»  *emojiyazı :** Yazdığınız yazıları emoji halinde yazar.
 **»  *espri :** Bot sizin için espri yapar.
 **»  *hesapla :** Belirttiğiniz matematik işlemini bot yapar.
 **»  *kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
    **»  *kaç-cm :** Bot malafat uzunluğunuzu söyler.(ironi)
    **»  *kralol :** Kral olmanıza yarar.(ironi)
 **»  *slots :** Slot oynarsınız.
    **»  *taksimdayı :** Taksim Dayı gifi atar.
    **» *tokat :** Etiketlediğiniz kişiyi tokatlarsınız.(ironi)
 **»  *yazı-tura :** Bot ile yazı-tura oyununu oynarsınız.
 **»  *yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
    **»  *öp :** Etiketlediğiniz kişiyi öpmenize yarar.(ironi)
 **»  *şekerye :** Bot size şeker ikram eder.
 **»  *atatürk :** Atamızı saygıyla anıyoruz.
 **»  *mcskin :** Belirttiniz kişin minecraft skinini(karakterini) atar.
 **»  *ping :** Botun pingine bakarsınız.
  **»  *token :** Botun tokenine bakarsınız.
  **»  *tersyazı :** Tersyazı yazarsınız.
  *»  *düello :** Belirttiniz kişiyle düello atarsınız.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

:Kurucum: TREFAX#0038**
:Yardım için kurucuma yazınız kurucum: TREFAX#0038**
  :round_pushpin: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin! Fikirleriniz için lütfen kurucuya yazın kurucum: TREFAX#0038**
:Botu sunucunuza davet etmek için lütfen kurucuya yazınız kurucu: TREFAX#0038
  :dizzy: **Komut hakkında detaylı bilgi için: *yardım**
  :airplane: **Aktif discord.js sürümüm: v12.2.0**
  

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/Kekc2pU)** **•** **[)** **•** **[Web-Site](https://www.discord.com/)**
`)
 
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();

return message.channel.send(Embedmatador)
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