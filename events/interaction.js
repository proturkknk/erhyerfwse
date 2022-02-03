const {MessageEmbed} = require("discord.js");
const ayarlar = require('../ayarlar.json');
const db = require('quick.db');
const dblapi = require('dblapi.js')
const dbl = new dblapi(process.env.dbl_token)
let talkedRecently = new Set();

module.exports = async(int, bot) => {
  int.reply('bot şuan bakımda komutları eklicez birazdan bekleyin')
}


