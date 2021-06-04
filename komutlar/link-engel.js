const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {

  if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(` Bu komudu kullanabilmek için "Sunucuyu Yönet" yetkisine sahip olman gerek.`)
  if (!args[0]) return message.channel.send(`:no_entry: Reklam Filtresini Ayarlamak İçin \`+link aç\` | Kapatmak İstiyorsanız \`+link kapat\` Yazabilirsiniz`)
  if (args[0] !== 'aç' && args[0] !== 'kapat') return message.channel.send(`:no_entry: Reklam engeli Ayarlamak İçin \`+link aç\` | Kapatmak İstiyorsanız \`+link kapat\` Yazabilirsiniz.`)

    if (args[0] == 'aç') {
    db.set(`reklamFiltre_${message.guild.id}`, 'acik')
    let i = await db.fetch(`reklamFiltre_${message.guild.id}`)
  message.channel.send(`Reklam Filtresi başarıyla ayarlandı.`)   
    
  }

  if (args[0] == 'kapat') {
  
    let üye = await db.fetch(`reklamFiltre_${message.guild.id}`)
    if (!üye) return message.channel.send(`Reklam engeli açtığınızdan emin misiniz?`)
  
  
    db.delete(`reklamFiltre_${message.guild.id}`)
  
    message.channel.send(`Reklam engel başarıyla kapatıldı.`)
  }

};


exports.conf = {
enabled: true,
guildOnly: false,
  aliases: ['link','reklam'],
permLevel: 0
};

exports.help = {
name: 'reklam-engel',
description: 'reklamm',
usage: 'gkanal'
};