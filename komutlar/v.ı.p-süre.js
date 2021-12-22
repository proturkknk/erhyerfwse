const db = require("quick.db")
const ms = require("ms")
exports.run = async (client, message, args) => {
let sürem = await db.fetch(`gold.${message.member.id}.goldsüre`)
if(!sürem) return message.reply("Sen V.I.P üye değilsin.")
message.channel.send("Süren:"+(ms(sürem-message.createdTimestamp)).replace("s", "sn").replace("m", "dk").replace("h", "sa").replace("d", "g"))
}
//made by ceyhun
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'vıp-sürem',
    description: 'vıp-sürem',
    usage: 'vıp-sürem'
}