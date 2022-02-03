const {MessageEmbed} = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const dblapi = require('dblapi.js')
const dbl = new dblapi(process.env.dbl_token)
let talkedRecently = new Set();

module.exports = async(int, bot) => {
  let cmd
  if (bot.commands.has(int.commandName)) {
    cmd = bot.commands.get(int.commandName);
  } else if (bot.aliases.has(int.commandName)) {
    cmd = bot.commands.get(bot.aliases.get(int.commandName));//
  }
  
}


