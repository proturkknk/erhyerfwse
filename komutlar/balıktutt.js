const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms');
exports.run = async (client, message, args) => {   
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  
   let timeout = 15000;
   function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}   
   let crime = await db.fetch(`baliktutma_${message.author.id}`)
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
   if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
    
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ Balık tutmak için ${time.seconds ? time.seconds + ' saniye beklemelisin!' : 'tekrar dene!'}`))
      } else {
     let gerekenpara = 250
     let para = db.fetch(`para_${message.author.id}`)
     if(para < 250) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                                .setDescription(`Balık tutmak için balıkçı dayıdan olta kiralamalısın! Gereken Para: 250 💸`))
        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        let awnser = result[Math.floor(Math.random() * result.length)];
     const cümleler = [
       "Balık oltadan kaçtı","Hırsızın biri balığını çaldı","Martının biri gelip balığını kaptı"]
     var cümle = cümleler[Math.floor(Math.random() * cümleler.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = 300         
      message.channel.send(new Discord.MessageEmbed()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                           .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`${cümle} ve ${kaybettin} 💸 kaybettin!`));
         
      await db.set(`baliktutma_${message.author.id}`, Date.now());
       await db.add(`para_${message.author.id}`, -kaybettin);   
        } else {
 const sentences2 = ["Çipura tuttun","Hamsi tuttun","Kolyoz tuttun","İsavrit tuttun"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(350,600)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`${sentence2} ve dayı sana ${kazandın} 💸 ödedi!`)
      message.channel.send(embed)   
     await db.set(`baliktutma_${message.author.id}`, Date.now());
    await db.add(`para_${message.author.id}`, kazandın);
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        }}}
exports.conf = {
  enabled: true,
  aliases: ["balık-tutt","baliktutt","balik-tutt"],
};

exports.help = {
  name: 'balık-tutt',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\