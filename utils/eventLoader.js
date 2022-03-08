module.exports = bot => {
  bot.on('ready', () => require('../events/ready.js')(bot))
  bot.on('messageCreate', msg => require('../events/message.js')(msg, bot))
  bot.on('guildMemberAdd', member => require('../events/GuildMemberAdd.js')(member, bot))
  bot.on('interactionCreate', int => require('../events/interaction.js')(int, bot))
}