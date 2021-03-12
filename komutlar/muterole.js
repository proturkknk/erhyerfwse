client.on('roleDelete', async role => {
const data = await require('quick.db').fetch(carl-mute-role.${role.guild.id});
if(data && data === role.id) require('quick.db').delete(carl-mute-role.${role.guild.id}); 
});
const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

if(!message.member.hasPermission('MANAGE_MESSAGES')) return;

const muteRoleFetch = await database.fetch(carl-mute-role.${message.guild.id});
if(!muteRoleFetch) return message.channel.send('This server does not have a mute role, use !muterole  to set one or !muterole create [name] to create one.');

if(!args[0]) return message.channel.send(\``${message.content.split('unmute')[0]}unmute  [reason]
      ^^^^^^^^
member is a required argument that is missing.```);

let member = message.guild.members.cache.get(args[0]) || message.mentions.members.first() || message.guild.members.cache.find(a => message.guild.members.cache.get(a.user.id).nickname && a.nickname.toLowerCase().includes(args[0].toLowerCase())) || message.guild.members.cache.find(a => a.user.username.toLowerCase().includes(args[0].toLowerCase()))
if(!member) return message.channel.send(Member "${args[0]}" not found`);
member.roles.remove(muteRoleFetch).then(() => {
return message.channel.send('Successfully unmuted '+member.user.tag+'');
})
}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'unmute'
};// Ahmet Samet Kod
Unmute bu
const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {// can#0002

if(!message.member.hasPermission('MANAGE_MESSAGES')) return;
if(!args[0]) return message.channel.send('You need to specify a role.');

if(args[0] === 'create') {

message.guild.roles.create({ data: { name: args.slice(1).join(' ')  'muted', color: '#f4424b' }}).then(role => {
role.setPermissions(0);
message.channel.send("Successfully created the role. Applying the overwrites now. This may take a few seconds. You will receive a message once I'm done.").then(() => {
let arrayed = message.guild.channels.cache.filter(a => a.type === 'text').array();

var okay = 0;

for(const key in arrayed) {
arrayed[key].overwritePermissions([{
id: role.id,
deny: ['SEND_MESSAGES', 'ADD_REACTIONS'],
}], 'Muterole update by '+message.author.tag);
okay++;
};
database.set(carl-mute-role.${message.guild.id}, role.id);
return message.channel.send("Success! The role "+role.name+" has been created with "+okay+" successful channel overrides and 0 skipped.");

});
});
};

if(!args[0] === 'create') {
let role = message.guild.roles.cache.get(args[0])  message.mentions.roles.first() || message.guild.roles.cache.find(a => a.name.toLowerCase().includes(args.slice(0).join(' ').toLowerCase()))
if(!role) return message.channel.send('Role "'+args.slice(0).join(' ')+'" not found.');

database.set(carl-mute-role.${message.guild.id}, role.id);
return message.channel.send(Set **${role.name}** as the muterole.);
};

}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'muterole'
};// Ahmet Samet Kod