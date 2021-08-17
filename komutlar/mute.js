const Discord = require('discord.js');
const db = require('quick.db');
const ms = require("ms");

exports.run = async (client, message, args) => {    

var msg = message;
var muterole1 = db.fetch(`muteroluid_${message.guild.id}`);
var muterole2 = message.guild.roles.cache.find(r => r.id === muterole1);
if (!muterole2) {
    try {
     muterole2 = await message.guild.roles.create({ 
            data: {
                name: "Muted",
                color: "#1800FF",
                permissions: []
              },
            reason: 'Mute Rolü başarıyla oluşturuldu!' 
            })
        db.set(`muteroluid_${message.guild.id}`, muterole2.id);
        message.guild.channels.cache.forEach(async (channel) => {
            await channel.createOverwrite(muterole2, {
                  SEND_MESSAGES: false,
                  ADD_REACTIONS: false,
                  CONNECT: false
              });
          });
} catch (err) {
    console.log(err);
}
};
var kisi = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!kisi) return message.reply("Susturmam İçin Bir Kullanıcı Belirtiniz.");
var time = args[1];
var reason = args.slice(2).join(" ")
if (!time) {
    if(reason) {
        if(!db.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
            let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: "INFINITY", finishtime: "INFINITY"}
            db.get('mute').push(obj12).write()
            } else {
                let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: "INFINITY", finishtime: "INFINITY"}
                db.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
            }
            if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);
        message.channel.send(`${kisi} **SINIRSIZ** Şekilde Susturuldu!\nNedeni: **${reason}**\n Susturan Yetkili: **${message.author}**`);
    } else {
        if(!db.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
            let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: "INFINITY", finishtime: "INFINITY"}
            db.get('mute').push(obj12).write()
            } else {
                let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: "INFINITY", finishtime: "INFINITY"}
                db.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
            }
            if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);
        message.channel.send(`${kisi} **SINIRSIZ** Şekilde Susturuldu!\n Susturan Yetkili: **${message.author}**`);
    };
} else {
    let finishtime = Date.now() + ms(time.replace(' dakika', 'm').replace(' saat', 'h').replace(' saniye', 's').replace(' gün', 'd'))
    if(reason){
        if(!db.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
            let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: time, finishtime: finishtime}
            db.get('mute').push(obj12).write()
            } else {
                let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: reason, time: time, finishtime: finishtime}
                db.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
            }
            if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);
        message.channel.send(`${kisi} **${time}** Süresince Şekilde Susturuldu!\nNedeni: **${reason}**\n Susturan Yetkili: **${message.author}**`);
        db.read()
        let bitiszamani = db.get('mute').find({guild: msg.guild.id, user: kisi.id}).value().finishtime
        if(bitiszamani && bitiszamani !== null && bitiszamani !== "INFINITY") {
        let ainterval = setInterval(function() {
            if(bitiszamani <= Date.now()) {
                clearInterval(ainterval)
            if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                kisi.roles.remove(muterole2.id)
                db.get('mute').remove(db.get('mute').find({guild:message.guild.id, user: kisi.id}).value()).write()
              message.channel.send(`${kisi} Kullanıcısının Susturulma Süresi Dolduğu İçin Susturulması Kaldırılmıştır.`)
            }
        }
           }, 6000);
        }
    } else {
        if(!db.get('mute').find({guild: message.guild.id, user: kisi.id}).value()) {
            let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: time, finishtime: finishtime}
            db.get('mute').push(obj12).write()
            } else {
                let obj12 = {guild: msg.guild.id, guild_name: msg.guild.name, user: kisi.id, user_name: kisi.user.username, staff: msg.author.id, staff_username: message.author.username, channel: message.channel.id, channel_name: message.channel.name, reason: "No Reason Given", time: time, finishtime: finishtime}
                db.get('mute').find({guild: msg.guild.id, user: kisi.id}).assign(obj12).write()
            }
            if(!kisi.roles.cache.has(muterole2.id)) await kisi.roles.add(muterole2.id);
        message.channel.send(`${kisi} **${time}** Süresince Şekilde Susturuldu!\n Susturan Yetkili: **${message.author}**`);
        db.read()
        let bitiszamani = db.get('mute').find({guild: msg.guild.id, user: kisi.id}).value().finishtime
        if(bitiszamani && bitiszamani !== null && bitiszamani !== "INFINITY") {
        let ainterval = setInterval(function() {
            if(bitiszamani <= Date.now()) {
                clearInterval(ainterval)
                if(kisi.roles.cache.find(r => r.id === muterole2.id)){
                    kisi.roles.remove(muterole2.id)
                    db.get('mute').remove(db.get('mute').find({guild:message.guild.id, user: kisi.id}).value()).write()
                  message.channel.send(`${kisi} Kullanıcının Susturulma Süresi Dolduğu İçin Susturulması Kaldırılmıştır.`)
                }
            }
           }, 6000);
        }
    }
};
};

exports.conf = {
  aliases: ['sustur',],
  permLevel: 2
};

exports.help = {
  name: 'mute',
  description: 'Sunucudaki Bir Kişiyi Susuturur.',
  usage: 'mute {@kullanici} {zaman} {sebep}'
};