
   
const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const db = require("quick.db")
const ayarlar = require('../ayarlar.json')

exports.run = async(client, message, params) => {

          let prefix =  ayarlar.prefix

 if (!message.member.permissions.has("ADMINISTRATOR")) return message.channel.send("Sunucu kur yapmak için **Yönetici** olmanız gerekir.")
  message.channel.send("Sunucu Kur yapmayı onaylıyormusunuz ``evet/hayır`` yazınız \n**(not: Botun rolü en üste olmalıdır yoksa hata verir)**").then(() => {
  
 const filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 10000
    }).then(collected => {
      if (collected.first().content === 'hayır') {
        return message.reply("İşlem iptal edildi.");
      }});
  
    message.channel.awaitMessages(filter, {
      max: 1,
      time: 15000
    }).then((collected) => {
      if (collected.first().content === 'evet') {
      message.guild.channels.cache.filter(u => {
        u.delete()
     })
await message.guild.channels.create('Önemli Kanallar', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: true,
 READ_MESSAGE_HISTORY: true
})
})
await message.guild.channels.create("「📣」Duyurular", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id,})
await message.guild.channels.create("「📊」Kurallar", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("「🎉」Çekilişler", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})
await message.guild.channels.create("「💝」Boost", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Önemli Kanallar').id})

                                        
  
  
await message.guild.channels.create('Genel', { type: "category" })
await message.guild.channels.create("「💬」Chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("「🛠️」Komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})
await message.guild.channels.create("「📷」Medya", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Genel').id})

await message.guild.channels.create('Eğlence Kanalları', { type: "category" })  
  await message.guild.channels.create("「💣」bom", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
   await message.guild.channels.create("「🔢」sayı-sayma", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
   await message.guild.channels.create("「💡」kelime türetme", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Eğlence Kanalları').id})
  
  
await message.guild.channels.create('Sohbet Kanalları', { type: "category" })
await message.guild.channels.create("「💬」Sohbet | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("「💬」Sohbet | 2", {type: "voice", parent: message.guild.channels.cache.find(a=> a.name === 'Sohbet Kanalları').id})
await message.guild.channels.create("「💬」Sohbet | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Sohbet Kanalları').id})

await message.guild.channels.create('Muzik Kanalları', { type: "category" })
await message.guild.channels.create("「🎵」Music | 1", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})
await message.guild.channels.create("「🎵」Music | 2", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})
await message.guild.channels.create("「🎵」Music | 3", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Muzik Kanalları').id})

  
  
await message.guild.channels.create('Yetkili Mekan', { type: "category" }).then(a => {
a.createOverwrite(message.guild.roles.cache.find(a => a.name === "@everyone"), {
 SEND_MESSAGES: false,
 VIEW_CHANNEL: false,
 READ_MESSAGE_HISTORY: false
})
})
await message.guild.channels.create("「🔒」Yetkili chat", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
 await message.guild.channels.create("「🔒」Yetkili komut", {type: "text", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id}) 
  await message.guild.channels.create("「🎤」Yetkili Özel", {type: "voice", parent: message.guild.channels.cache.find(a => a.name === 'Yetkili Mekan').id})
await message.guild.channels.cache.find(a => a.name === "「💬」Chat").send(' <@'+message.author.id+"> sunucu kuruldu!")
}
                    .catch(error => {
                    message.channel.send(`Bir hata oluştu Lütfen Destek Sunucusuna Gelip Bunu Bize Bildir!`);
                    console.error('Hata:', error);
                });

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['hazırsunucu','hazır-sunucu','sunucu-kur'],
  permLevel: 0
};

exports.help = {
  name: 'sunucukur',
  description: 'Sizin için sunucu kurar.',
  usage: 'sunucukur'
};
"