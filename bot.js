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
 
 

client.on("message", async msg => {
 
 
  const i = await db.fetch(`ssaass_${msg.guild.id}`);
    if (i == 'acik') {
      if (msg.content.toLowerCase() == 'sa' || msg.content.toLowerCase() == 's.a' || msg.content.toLowerCase() == 'selamun aleyküm' || msg.content.toLowerCase() == 'sea'|| msg.content.toLowerCase() == 'selam') {
          try {
 
                  return msg.reply(
                    'Aleyküm Selam, Hoşgeldin')
          } catch(err) {
            console.log(err);
          }
      }
    }
    else if (i == 'kapali') {
   
    }
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
  });