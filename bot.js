  const uptime = require('node-fetch')
const fs=require('fs');
const Discord=require("discord.js");
const client=new Discord.Client();
const db = require('quick.db')
const moment = require("moment");
const express = require('express');
/////
const app = express()
app.get('/', (req, res) => res.send("Bot Aktif"))
app.listen(process.env.PORT, () => console.log('Port ayarlandı: ' + process.env.PORT))
//////////////////



client.on("message", message => {
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(env.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let perms = client.yetkiler(message);
  let cmd;
  if (client.commands.has(command)) {
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if (perms < cmd.conf.permLevel) return;
    cmd.run(client, message, params, perms);
  }
})


client.on("ready", () => {
  console.log(`Bütün komutlar başarıyla yüklendi!`);
  client.user.setStatus("dnd");
  client.user.setActivity('-yardım | -davet');
})


const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
  if (err) console.error(err);
log(`${files.length} adet komut yüklemeye hazırlanılıyor.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut ismi: ${props.help.name.toUpperCase()}.`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});


client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e){
      reject(e);
    }
  });
};

  
client.yetkiler = message => {
  if(!message.guild) {
	return; }
  let permlvl = -ayarlar.varsayilanperm  ;
  if(message.member.hasPermission("MANAGE_MESSAGES")) permlvl = 1;
  if(message.member.hasPermission("KICK_MEMBERS")) permlvl = 2;
  if(message.member.hasPermission("BAN_MEMBERS")) permlvl = 3;
  if(message.member.hasPermission("MANAGE_GUILD")) permlvl = 4;
  if(message.member.hasPermission("ADMINISTRATOR")) permlvl = 5;
  if(message.author.id === message.guild.ownerID) permlvl = 6;
  if(message.author.id === ayarlar.sahip) permlvl = 7;
  return permlvl;
};



client.on("message", async msg => {
    if(msg.author.bot) return;
    
    let i = await db.fetch(`reklamFiltre_${msg.guild.id}`)  
          if (i == 'acik') {
              const reklam = ["https://","http://","discord.gg"];
              if (reklam.some(word => msg.content.toLowerCase().includes(word))) {
                try {
                  if (!msg.member.hasPermission("MANAGE_GUILD")) {
                    msg.delete();                                       
                    return msg.channel.send(`${msg.author.tag}, Reklam Yapmak Yasak!`).then(msg => msg.delete(10000));
                  }              
                } catch(err) {
                  console.log(err);
                }
              }
          }
          if (!i) return;
          });    


client.on("messageUpdate", msg => {
 
 

client.on("message", async msg => 
          
    if (!i) return;
 
 client.on("ready", async () => {
        setInterval(async () => {
          client.guilds.cache.map(guild => {
            guild.channels.cache.map(channel => {
              let data = db.get(`cekilis.${guild.id}_${channel.id}`);
              if (data) {
                let time = Date.now() - data.zaman;
                let sure = data.sure;
                let kanal = guild.channels.cache.get(data.kanalid);
                kanal.messages.fetch(data.mesajid).then(async mesaj => {
                  mesaj.edit(
                    new Discord.MessageEmbed()
                      .setColor("#2c2f33")
                      .setTitle(data.odul)
                      .setTimestamp()
                      .setFooter(data.toplam + " Kazanan")
                      .setDescription(`**🎉 Katılmak İçin Tıkla!
      Süre: \`${moment
                      .duration(sure - time)
                      .format(`DD [Days,] HH [Hours,] mm [Minutes,] ss [Seconds]`)}\`
      Çekilişi yapan: <@${data.hosted}>**`)
                  );
                });
      
                if (time >= sure) {
                  let win = client.channels.cache
                    .get(data.kanalid)
                    .messages.cache.get(data.mesajid)
                    .reactions.cache.get("🎉")
                    .users.cache.array()
                    .map(user => "<@" + user.id + ">");
                  let winner = [];
                  for (let i = 0; i < data.toplam; i += 1) {
                    winner.push(win[Math.floor(Math.random() * win.length)]);
                  }
      
                  kanal.messages.fetch(data.mesajid).then(async mesaj => {
                    mesaj.edit(
                      new Discord.MessageEmbed()
                        .setTitle(data.odul + " 🎉")//Pixelien
                        .setColor("#2c2f33")//Çalma lütfen emeğe saygı
                        .setTimestamp().setDescription(`**Çekilişi yapan: <@${data.hosted}>
      Kazanan: ${winner}**`)
                    );
                  });
                  kanal.send(`**${winner}, \`${data.odul}\` Kazandı!, Tebirkler**`);
                  db.delete(`cekilis.${guild.id}_${channel.id}`);
                }
              }
            });
          });
        }, 5000);
      });

    //Çekiliş\\
  client.on('message', async (msg, member, guild) => {
  
let i = await  db.fetch(`saas_${msg.guild.id}`)

if(i === 'açık') {
  
if (msg.content.toLowerCase() === 'sa'){
          
msg.reply('Aleyküm Selam, Hoşgeldin ');    
}
  
}
});

client.on('message', async (msg, member, guild) => {
  
let i = await  db.fetch(`saas_${msg.guild.id}`)

if(i === 'açık') {
  
if (msg.content.toLowerCase() === 'hi'){
          
msg.reply('Hi welcome ');    
}
  
}

  client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'sa') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
});

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selam') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
}); 

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selamın aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
}); 

client.on('message', async msg => { 
if (msg.content.toLowerCase() === 'selamun aleyküm') { 
await msg.react('🇦'); 
msg.react('🇸'); 
} 
client.on('guildMemberAdd', member => {
  let batuhan = client.channels.get('714087075116220426')
  if(!batuhan) return
  let kullanıcı = client.users.get(member.id)
  const kurulus = new Date().getTime()- kullanıcı.createdAt.getTime();
  let embed;
  if (kurulus < 1296000000) batuhan = 'Güvenilir Değil!'
  if (kurulus > 1296000000) batuhan = 'Güvenilir!'
  batuhan.send(`${member} Kullanıcısı Katıldı!
**Güvenirlik Durumu** : *${batuhan}*`)

client.on("guildMemberAdd", (member, message) => {
  
if (member.guild.id !== "744873235350552668") return; //Sunucu İd
  
var msg = message; 
var üyesayısı = client.guilds.get("744873235350552668").members.size.toString().replace(/ /g, "") //Sunucu İd
var üs = üyesayısı.match(/([0-9])/g) 

üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "Bilinmiyor!").toLowerCase() 
 
if(üs) { 
  
üyesayısı = üyesayısı.replace(/([0-9])/g, d => { 
  
return { 
  
'0': `<a:sifir:744874529657978901>`,
'1': `<a:bir:744874529859305552>`,
'2': `<a:iki:744874529196867628>`,
'3': `<a:uc:744874529561509922>`,
'4': `<a:dort:744889898783211540>`,                       
'5': `<a:bes:744874530085929042>`,
'6': `<a:alti:744874530576793670>`,
'7': `<a:yedi:744874531122053191>`,
'8': `<a:sekiz:744874530861744128>`,
'9': `<a:dokuz:744874530513748049>`}[d];
  
}) 
}
  
let aylartoplam = {
  
"01": "Ocak",
"02": "Subat",
"03": "Mart",
"04": "Nisan",
"05": "Mayis",
"06": "Haziran",
"07": "Temmuz",
"08": "Agustos",
"09": "Eylül",
"10": "Ekim",
"11": "Kasim",
"12": "Aralik"
  
};
  
let aylar = aylartoplam;
let user = client.users.get(member.id);
  
require("moment-duration-format");
  
let eskiNick = member.user.username;
  
const id = "744873679636135997"; //Kanal İd
const channel = member.guild.channels.get(id);
const kurulus = new Date().getTime() - user.createdAt.getTime();
const gün = moment.duration(kurulus).format("D");
  
var kontrol;
  
if (gün < 7) kontrol = `<a:suspect:744900323528671322> Şüpheli!`;
if (gün > 7) kontrol = `<a:security:744900306344738856> Güvenli!`;
  
const giris = new Discord.RichEmbed()

.setColor("Black")
.setDescription(`**Hosgeldin** **${member} Seninle Birlikte ${üyesayısı} Kisiyiz!**
 
**Sunucuya Kayıt Olmak için Ses Teyit Odasına Geçebilirsiniz.**
 
**Hesap Kuruluş Zamanı : ${moment(user.createdAt).format("DD")} ${aylar[moment(user.createdAt).format("MM")]} ${moment(user.createdAt).format("YYYY HH:mm:ss")}** 
 
**Bu Kullanıcı :** **${kontrol}**
 
**<@&id> Rolündeki Yetkililer Seninle İlgilenecektir.**`)

.setImage("https://cdn.discordapp.com/attachments/744900584611512482/744900855731454043/yay.gif")
          
client.channels.get(id).send(giris)
    
});