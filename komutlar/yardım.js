const Discord = require ("discord.js");

exports.run = (client, message) => {

const Embedmatador = new Discord.MessageEmbed()

.setColor("RED")
.setTitle("**▬▬▬▬▬▬[** ©️ **Eğlence Botu** ©️ **]▬▬▬▬▬▬**  \n \n **Şuanda kullanılan prefix** `#`")
.setThumbnail("")
.setDescription(`

▬▬▬▬▬▬[ :closed_lock_with_key: **Eğlence Komutları** :closed_lock_with_key: ]▬▬▬▬▬▬

  **»  #fbi :** :crown: FBİ gifi atar :crown:.
  **»  #aşkölçer :** :crown: Aşkınızı ölçer :crown:. 
**»  #aduketçek :** :crown: Etiketlediğiniz kişiye aduket çekersiniz :crown:.
 **»  #ara155 :** :crown: Polisi aramanıza yarar :crown:.
 **»  #ay :** :crown: Ay gifi atar :crown:.
 **»  #balık-tut :** Denizde balık tutarsınız.
 **»  #beşlik :** Etiketlediğiniz kişiyle beşlik çakarsınız.
  **»  #dünya :** Dünya gifi atar.
  **»  #efkarım :** Şu anda olan efkarınızı ölçersiniz.
 **»  #ejderha-yazı :** Ejderha temalı logo üretirsiniz.
 **»  #emojiyazı :** Yazdığınız yazıları emoji halinde yazar.
 **»  #espri :** Bot sizin için espri yapar.
 **»  #hesapla :** Belirttiğiniz matematik işlemini bot yapar.
 **»  #kartopu :** Etiketlediğiniz kişiye kartopu atarsınız.
    **»  #kaç-cm :** Bot malafat uzunluğunuzu söyler.
    **»  #kralol :** Kral olmanıza yarar.
 **»  #slots :** Slot oynarsınız.
    **»  #taksimdayı :** Taksim Dayı gifi atar.
    **» #tokat :** Etiketlediğiniz kişiyi tokatlarsınız.
 **»  #yazı-tura :** Bot ile yazı-tura oyununu oynarsınız.
 **»  #yılbaşı :** Yılbaşının gelmesine ne kadar yaklaştığınızı gösterir.
    **»  #öp :** Etiketlediğiniz kişiyi öpmenize yarar.
 **»  #şekerye :** Bot size şeker ikram eder.

**▬▬▬▬▬▬▬[** :gear: **Bilgilendirme** :gear: **]▬▬▬▬▬▬▬**

  :round_pushpin: **Fikirleriniz** **değerlidir, Belirtmekten asla çekinmeyin!**
  :dizzy: **Komut hakkında detaylı bilgi için: #yardım**
  :airplane: **Aktif discord.js sürümüm: v12.2.0**

**» Bağlantılar** 
**[Destek Sunucusu](https://discord.gg/rZzVuXF)** **•** **[Botun Davet Linki](https://www.discord.com/)** **•** **[Web-Site](https://www.discord.com/)**
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