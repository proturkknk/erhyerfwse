const express = require("express");
const app = express();
app.use(express.static("public"));
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/index.html");
});
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});

const discord = require('discord.js');
const bot = new discord.Client();

bot.on('message', msg => {
  if(msg.author.id == bot.user.id) return
  if(msg.guild) return
  const lower = msg.content.toLowerCase().split(" ").join('')
  if(lower.includes('özür dilerim bot :()') || lower.includes('bot özür dilerim') || lower.includes('özür dilerim bot')) {
    setTimeout(() => {
      msg.channel.send('Kardeşim reklam yapma girmicem kusura bakma, lütfen felanda deme. (not: Bu atılan mesaj otomatik gönderilmektedir, birsürü reklam yapıldığı için.Eğer reklam yapmadıysanız lütfen bu mesajı görmezden gelin.')
    },1000)
  }
})