const { delay, randomRange, verify } = require('../utils/Util');
const words = ['çikolata', 'vortex', 'odun', 'bomba', 'süt', 'şimşek', 'yıldırım', 'patlat', 'savaş', 'kelime', 'yok et', 'bilmem', 'öldür', 'sonsuzluk', 'gerçek','dondurma','klasik','xaine','discord','bot',];

exports.run = async (client, msg, args) => {
 
  this.fighting = new Set();
  
  let opponent = msg.mentions.users.first()
	if (!opponent) return msg.reply("Lütfen oynamak istediğiniz kişiyi etiketleyiniz.")
  
  if (opponent.bot) return msg.reply('Botlar ile oynayamazsınız.');
		if (opponent.id === msg.author.id) return msg.reply('Kendiniz ile oyayamazsınız.');
		if (this.fighting.has(msg.channel.id)) return msg.reply(':warning: Hata!: Kanal başına sadece bir meydan okuma gelebilir.');
		this.fighting.add(msg.channel.id);
		try {
			await msg.channel.send(`${opponent}, Bu meydan okumayı kabul ediyor musun? Lütfen (\`evet\` veya \`hayır\` olarak cevap veriniz.)`);
			const verification = await verify(msg.channel, opponent);
			if (!verification) {
				this.fighting.delete(msg.channel.id);
				return msg.reply('Meydan okuman reddedildi veya verilen süre içerisinde cevap verilmedi.');
			}
      const sur = Math.random()*2000+2000
      await msg.channel.send('Hazırlanın, kelime '+(sur/1000).toFixed(1)+" saniye içinde geliyor!").then(m => {m.delete({timeout: sur})});
			setTimeout(async () => {
      const word = words[Math.floor(Math.random() * words.length)];
			await msg.channel.send(`ŞİMDİ \`${word.toUpperCase()}\` YAZ!`);
			await msg.channel.send(`**Kelimeyi tamamen küçük harfle yazın!**`);
			const filter = res => [opponent.id, msg.author.id].includes(res.author.id) && res.content.toLowerCase() === word;
			const winner = await msg.channel.awaitMessages(filter, {
				max: 1,
				time: 10000
			});
			this.fighting.delete(msg.channel.id);
			if (!winner.size) return msg.channel.send('Kimse kazanmadı, berabere bitti!');
			return msg.channel.send(`Ooo, Hızlıymışsın! Tebrikler ${winner.first().author}, Sen Kazandın!`);
      },sur)
		} catch (err) {
			this.fighting.delete(msg.channel.id);
			throw err;
		}
  
  }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yazı-yarışı', 'ilk-yazan-kazanır','kelime-yarışması','yazan-kazanır','Yazan-kazanır','YAZAN-KAZANIR','yazankazanır','Yazankazanır','YAZANKAZANIR'],
  permLevel: 0,
  kategori: "eğlence"
};

exports.help = {
  name: 'yazan-kazanır',
  category: "eğlence",
  description: 'Botun verdiği kelimeyi ilk yazan kazanır oyunu!',
  usage: 'yazan-kazanır [@kullanıcı]'
};