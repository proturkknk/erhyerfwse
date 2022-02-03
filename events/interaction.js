const {MessageEmbed} = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const dblapi = require('dblapi.js')
const dbl = new dblapi(process.env.dbl_token)
let talkedRecently = new Set();

module.exports = async(int, bot) => {
  if (talkedRecently.has(message.author.id)) {
    return;
  }
  talkedRecently.add(message.author.id);
	setTimeout(() => {
    talkedRecently.delete(message.author.id);
  }, 2500);
  const sunucu = bot.guilds.cache.get('714084499465568287')
  let client = message.client;
  if (message.author.bot) return;//
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);//
  let perms = client.elevation(message);
  let cmd;
  
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));//
  }
  let sg = false
  let bakim = new MessageEmbed()
          .setTitle('Bot bakımda! Lütfen daha sonra tekrar Deneyiniz.')
          .setColor('RANDOM')
          .setDescription(`**:warning: Sizlere En iyi şekilde hizmet Verebilmek İçin Bakımdayız.\n:question: :hourglass: Lütfen Daha Sonra Tekrar Deneyin. Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız. Ayrıca bot neden bakımda ve bakım süresini öğrenmek isterseniz destek sunucumuza gelebilirsiniz. [Destek sunucumuza katılmak için tıkla](https://discord.gg/Kekc2pU)**`)
          .setFooter('Eğer uzun süre açılmazsa yapımcıma veya Destek sunucumuza gelerek sorabilirsiniz.')
  
    let botbakım = db.fetch('xaine.bakim')
  let kabulettimi = db.fetch(`kabulettimi_${message.author.id}`)
  
 if (cmd) {
   // if (cmd) { satırının altına yazılacak! NAPİM

if(!kabulettimi && cmd.conf.kategori != "bot") return message.reply("Botun herhangi bir komutunu kullanmak için şartlarımızı onaylamalısınız! Onaylamak için `<prefix>kabulet` yazın. Şartlarımızı görmek için `<prefix>şartlar` yazın. Örnek: +kabulet +şartlar")
      if(!ayarlar.sahip.includes(message.author.id)) {
        if(botbakım == 'aktif'){
          sg = true
        return message.channel.send({embeds: [bakim]})
        } 
  }
  } 
      if(sg) return message.channel.send({embeds: [bakim]})
        if(!ayarlar.sahip.includes(message.author.id)) {
        const player = db.fetch(`karaliste.${message.author.id}`)//Bots For List Yapımı!
        if(player) return message.channel.send({embeds: [
          new MessageEmbed()
          .setDescription(`**Xaine Botu artık kullanamazsınız! Çünkü Yetkililerimiz tarafından Karalisteye alınmışsınız. Nedenini bilmiyorsanız Xaine Bot sahibine yazabilirsiniz.**`)]}//Bots For List Yapımı!
        )
        }
  
  async function ok() {
    if(sg) return message.channel.send({embeds: [bakim]})
    if(!cmd) return
    if (cmd.conf.permLevel === 1) {
			if (!message.member.permissions.has("MANAGE_MESSAGES")) {//
				const embed = new MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embeds: [embed]})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.permissions.has("KICK_MEMBERS")) {//
				const embed = new MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")//
				message.channel.send({embeds: [embed]})
				return//
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.permissions.has("BAN_MEMBERS")) {
				const embed = new MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embeds: [embed]})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.permissions.has("ADMINISTRATOR")) {//
				const embed = new MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embeds: [embed]})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embeds: [embed]})
				return
			}
		}
       if (cmd) {
    }
    if (perms < cmd.conf.permLevel) return;
    if(sg) return message.channel.send(bakim)
    if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send("Olamaz sen botun karalistesinde bulunuyorsun botu kullanamazsın.")
    cmd.run(client, message, params, perms);
  }
  
  const hatamesaj = new MessageEmbed()
  .setTitle('Bekle! Biletiniz var mı?')
  .setDescription('**Bu komutu kullanmak için Destek sunucumuza katılıp bota oy vermeniz gerekmektedir.\n\n[Oy Ver](https://top.gg/bot/774235071653216286/vote), [Sunucuya Katıl](https://discord.gg/99C4tGzgK4)**')
  .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL())
  if(cmd){
    if(cmd.help){
      if(cmd.help.category) {
        if(cmd.help.category == 'moderasyon'){
          dbl.hasVoted(message.author.id).then(c => { 
if(message.author.id === ["696365117063036986", "id"]) return
async function init() {
  console.log(1);
  await sleep(100000);
  console.log(2);
}

function sleep(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}
            if(c && sunucu.members.cache.get(message.author.id)){
              ok()
            }else{
              message.channel.send({embeds: [hatamesaj]})
            }
          })
        }else{
          ok()
        }
      }else{
        ok()
      }
    }else{
      ok()
    }
  }else{
    ok()
  }
}


