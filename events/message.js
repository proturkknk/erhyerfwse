const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const dblapi = require('dblapi.js')
const dbl = new dblapi(process.env.dbl_token)
let talkedRecently = new Set();

module.exports = (message, bot) => {
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
  
  if(!cmd) return
      
      
        if(message.author.id !== ayarlar.sahip) {
        const player = db.fetch(`karaliste.${message.author.id}`)//Bots For List Yapımı!
        if(player) return message.channel.send(
          new Discord.MessageEmbed()
          .setDescription(`**Bu botu kullanamazsınız çünkü yetkili tarafından kara listeye alınmışsınız.**`)//Bots For List Yapımı!
        )
 }
  
  const hatamesaj = new Discord.MessageEmbed()
  .setTitle('Bekle! Biletiniz var mı?')
  .setDescription('**Bu komutu kullanmak için Destek sunucumuza katılıp bota oy vermeniz gerekmektedir.\n\n[Oy Ver](https://top.gg/bot/774235071653216286/vote), [Sunucuya Katıl](https://discord.gg/99C4tGzgK4)**')
  .setColor('RANDOM')
  .setThumbnail(message.author.avatarURL())
    if(!sunucu.members.cache.get(message.author.id)){
      if(cmd.help.category) {
        if(cmd.help.category == 'moderasyon') {
          message.author.send(hatamesaj).catch(() => message.channel.send(hatamesaj).then(m => m.delete({timeout: 30000})))
          message.delete()
          return
        }else{
          if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")//
				message.channel.send({embed})
				return//
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
       if (cmd) {
  let bakım = db.fetch('bakım');
  if(message.author.id !== ayarlar.sahip){
  if(bakım){
 return message.channel.send(`** :warning: Sizlere En iyi şekilde Verebilmek İçin Bakımdayız.\n❓ Bakım Sebebi: \`${bakım}\` <:hourglass:825313852321169429> Lütfen Daha Sonra Tekrar Deneyin. Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.**`)
     .addField('İşte Destek Sunucum!',"[Destek Sunucusu](https://discord.gg/Kekc2pU)")
     }
  }
    }
    if (perms < cmd.conf.permLevel) return;
    if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send("Olamaz sen botun karalistesinde bulunuyorsun botu kullanamazsın.")
    cmd.run(client, message, params, perms);
        }
      }
    }else{
      dbl.hasVoted(message.author.id).then(c => {
        if(!c) {
          if(cmd.help.category) {
            if(cmd.help.category == 'moderasyon'){
              message.author.send(hatamesaj).catch(() => message.channel.send(hatamesaj).then(m => m.delete({timeout: 30000})))
              message.delete()
              return
            }else{
              if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")//
				message.channel.send({embed})
				return//
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
       if (cmd) {
  let bakım = db.fetch('bakım');
  if(message.author.id !== ayarlar.sahip){
  if(bakım){
 return message.channel.send(`** :warning: Sizlere En iyi şekilde Verebilmek İçin Bakımdayız.\n❓ Bakım Sebebi: \`${bakım}\` <:hourglass:825313852321169429> Lütfen Daha Sonra Tekrar Deneyin. Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.**`)
     .addField('İşte Destek Sunucum!',"[Destek Sunucusu](https://discord.gg/Kekc2pU)")
     }
  }
    }
    if (perms < cmd.conf.permLevel) return;
    if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send("Olamaz sen botun karalistesinde bulunuyorsun botu kullanamazsın.")
    cmd.run(client, message, params, perms);
            }
          }else{
            if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")//
				message.channel.send({embed})
				return//
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
       if (cmd) {
  let bakım = db.fetch('bakım');
  if(message.author.id !== ayarlar.sahip){
  if(bakım){
 return message.channel.send(`** :warning: Sizlere En iyi şekilde Verebilmek İçin Bakımdayız.\n❓ Bakım Sebebi: \`${bakım}\` <:hourglass:825313852321169429> Lütfen Daha Sonra Tekrar Deneyin. Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.**`)
     .addField('İşte Destek Sunucum!',"[Destek Sunucusu](https://discord.gg/Kekc2pU)")
     }
  }
    }
    if (perms < cmd.conf.permLevel) return;
    if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send("Olamaz sen botun karalistesinde bulunuyorsun botu kullanamazsın.")
    cmd.run(client, message, params, perms);
          }
        }else{
          if (cmd.conf.permLevel === 1) {
			if (!message.member.hasPermission("MANAGE_MESSAGES")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`)
          .setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 2) {
			if (!message.member.hasPermission("KICK_MEMBERS")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri At** iznine sahip olmalısın!`)
					.setColor("RED")//
				message.channel.send({embed})
				return//
			}
		}
    if (cmd.conf.permLevel === 3) {
			if (!message.member.hasPermission("BAN_MEMBERS")) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 4) {
			if (!message.member.hasPermission("ADMINISTRATOR")) {//
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu kullanabilmek için **Yönetici** iznine sahip olmalısın!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
		if (cmd.conf.permLevel === 5) {
			if (!ayarlar.sahip.includes(message.author.id)) {
				const embed = new Discord.MessageEmbed()
					.setDescription(`Bu komutu sadece **sahibim** kullanabilir!`)
					.setColor("RED")
				message.channel.send({embed})
				return
			}
		}
       if (cmd) {
  let bakım = db.fetch('bakım');
  if(message.author.id !== ayarlar.sahip){
  if(bakım){
 return message.channel.send(`** :warning: Sizlere En iyi şekilde Verebilmek İçin Bakımdayız.\n❓ Bakım Sebebi: \`${bakım}\` <:hourglass:825313852321169429> Lütfen Daha Sonra Tekrar Deneyin. Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.**`)
     .addField('İşte Destek Sunucum!',"[Destek Sunucusu](https://discord.gg/Kekc2pU)")
     }
  }
    }
    if (perms < cmd.conf.permLevel) return;
    if (db.fetch(`cokaradalistere_${message.author.id}`)) return message.channel.send("Olamaz sen botun karalistesinde bulunuyorsun botu kullanamazsın.")
    cmd.run(client, message, params, perms);
        }
      })
    }
  }
