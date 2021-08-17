const { country } = require("popcat-wrapper"),
{ MessageEmbed } = require("discord.js")
module.exports = {
	name: 'ulkeara',
	description: 'Bu komut, size istediğiniz ülkenin verilerini verir.',
	async execute(message, args) {
	 const answer = args.join(" ")
	 if(!answer){
		message.channel.send("Lütfen bir ülke ismi girin.")
	} 
	 try {
		const c = await country(answer)
		const final = new MessageEmbed()
		.setTitle(c.name)
		.setColor("RANDOM")
		.setThumbnail(c.flag)
		.addField("İsmi", c.name, true)
		.addField("Başkenti", c.capital, true)
		.addField("Domaini", c.domain, true)
		.addField("Bölgesi", c.region, true)
		.addField("Nüfusu", c.population, true)
		.addField("Ülkenin Alanı", c.area, true)
		.addField("Para Birimi", `${c.currency.name} (${c.currency.short})\nSembolü: ${c.currency.symbol}`)
		message.channel.send({embeds: [final]})
	 } catch (error) {
		message.channel.send("Geçersiz ülke ismi! Lütfen doğru yazdığınızdan emin olun veya tekrar deneyin.")
	 }
	}, 
};