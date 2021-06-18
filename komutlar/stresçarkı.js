const Discord = require('discord.js');







exports.run = async (client, message) => {

    let dönme = await message.channel.send({

        embed: {

            color: 0x00AE86,

            description: `${message.author.tag} stres çarkı çevirdin! Lütfen kaç saniye döndünü öğrenmek için bekleyiniz.`,

            image: {

                url: "https://i.imgur.com/KJJxVi4.gif"

            }

        }

    });



    let bitiş = (Math.random() * (60 - 5 +1)) + 5;

    setTimeout(() => {

        dönme.edit({

            embed: {

                color: 0x00AE86,

                description: `${message.author.tag}, stres çarkın ${bitiş.toFixed(2)} saniye döndü!`

            }

        });

    }, 5 * 1000);

};  



exports.conf = {

  enabled: true, 

  guildOnly: false, 

  aliases: ['stres-çarkı','Stres-çarkı','STRES-ÇARKI','stresçarkı','Stresçarkı','STRESÇARKI'],

  permLevel: 0 

};



exports.help = {

  name: 'stresçarkı', 

  description: 'Bir stres çarkı döndür!',

  usage: 'stresçarkı'

};