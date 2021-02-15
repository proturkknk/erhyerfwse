const Discord = require('discord.js');
const { stripIndents } = require('common-tags');
const { randomRange, verify } = require('../util/Util.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {
  
  let cooldown = true
  
  if(cooldown) {
    cooldown = false
    
    let liste = await db.fetch('list');
    
  if(liste) {
    if(liste.find(o => o.id === message.author.id)) {
      
      const kullanıcı = liste.find(o => o.id === message.author.id)
      const yasaklayan = kullanıcı.yasaklayan
      const sebep = kullanıcı.sebep
      
      const embed = new Discord.RichEmbed()
      .setTitle('Karaliste')
      .setDescription('Neden Karalistem Var?')
      .setThumbnail(message.author.avatarURL)
      .addField('Karaliste Bilgiler','\nYasaklayan: **'+yasaklayan+'**\nSebep: '+sebep)
      .setColor('RED')
      .setTimestamp()
      
      message.channel.send(embed)
      return
    }
  }
  
  this.fighting = new Set();
  
    let opponent = message.mentions.users.first()
    if (!opponent) return message.reply("Oynamak istediğin kişiyi etiketlemelisin!")
  
  if (opponent.bot) return message.reply('Botlar ile oynayamazsın!');
  if (opponent.id === message.author.id) return message.reply('Kendin ile düello atamazsın!');
        if (this.fighting.has(message.channel.id)) return message.reply('Kanal başına sadece bir düello meydana gelebilir.');
        this.fighting.add(message.channel.id);
        try {
            if (!opponent.bot) {
                await message.channel.send(`${opponent}, düello isteği geldi. Düello'yu kabul ediyor musun? (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
                const verification = await verify(message.channel, opponent);
                if (!verification) {
                    this.fighting.delete(message.channel.id);
                    return message.channel.send(`Düello kabul edilmedi...`);
                }
            }
            let userHP = 3000;
            let oppoHP = 3000;
            let userTurn = false;
            let guard = false;
            const reset = (changeGuard = true) => {
                userTurn = !userTurn;
                if (changeGuard && guard) guard = false;
            };
            const dealDamage = damage => {
                if (userTurn) oppoHP -= damage;
                else userHP -= damage;
            };
            const forfeit = () => {
                if (userTurn) userHP = 0;
                else oppoHP = 0;
            };
            while (userHP > 0 && oppoHP > 0) { // eslint-disable-line no-unmodified-loop-condition
                const user = userTurn ? message.author : opponent;
                let choice;
                if (!opponent.bot || (opponent.bot && userTurn)) {
                    await message.channel.send(stripIndents`
                        ${user}, ne yapmak istersin? \`saldır\`, \`savun\`, \`ultra güç\`, veya \`kaç\`?
                        **${message.author.username}**: ${userHP} :heartpulse:
                        **${opponent.username}**: ${oppoHP} :heartpulse:
                    `);
                    const filter = res =>
                        res.author.id === user.id && ['saldır', 'savun', 'ultra güç', 'kaç'].includes(res.content.toLowerCase());
                    const turn = await message.channel.awaitMessages(filter, {
                        max: 1,
                        time: 30000
                    });
                    if (!turn.size) {
                        await message.reply(`Üzgünüm ama, süre doldu!`);
                        reset();
                        continue;
                    }
                    choice = turn.first().content.toLowerCase();
                } else {
                    const choices = ['saldır', 'savun', 'ultra güç'];
                    choice = choices[Math.floor(Math.random() * choices.length)];
                }
                if (choice === 'saldır') {
                    const damage = Math.floor(Math.random() * (guard ? 100 : 500)) + 1;
                  if(user.id === "522834911732695041") {
                    dealDamage(damage * 3);
                    await message.channel.send(`${user}, **${damage * 3}** hasar vurdu!`);
                  }else{
                      dealDamage(damage);
                      await message.channel.send(`${user}, **${damage}** hasar vurdu!`);
                  }
                    
                    reset();
                } else if (choice === 'savun') {
                    await message.channel.send(`${user}, kendisini süper kalkan ile savundu!`);
                    guard = true;
                    reset(false);
                } else if (choice === 'ultra güç') {
                    const miss = Math.floor(Math.random() * 4);
                    if (!miss) {
                        const damage = randomRange(500, guard ? 750 : 1000);
                        await message.channel.send(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterki miktarda topladın ve **${damage}** hasar vurdun!!`);
                        dealDamage(damage);
                    } else {
                        await message.channel.send(`${user}, Çoook uzak galaksilerden gelen ultra sonik enerjiyi yeterli miktarda toplayamadığın için ulta güç kullanamadın!`);
                    }
                    reset();
                } else if (choice === 'kaç') {
                    await message.channel.send(`${user}, kaçtı! Korkak!`);
                    forfeit();
                    break;
                } else {
                    await message.reply('Ne yapmak istediğini anlamadım.');
                }
            }
            this.fighting.delete(message.channel.id);
            const winner = userHP > oppoHP ? message.author : opponent;
            return message.channel.send(`Oyun bitti! Tebrikler, **${winner}** kazandı! \n**${message.author.username}**: ${userHP} :heartpulse: \n**${opponent.username}**: ${oppoHP} :heartpulse:`);
        } catch (err) {
            this.fighting.delete(message.channel.id);
            throw err;
        }
    
    setTimeout(function() {
       cooldown = true
      }, 2500);
  }
  
    
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['1vs1', '1v1', 'savaş','düello','duello'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'düello',
  category: "Oyun",
  description: 'İstediğiniz bir kişi ile düello atarsınız!',
  usage: 'düello <@kullanıcı>'
};
   