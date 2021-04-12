const Discord = require("discord.js");

exports.run = (client, msg, args) => {

let matador = args.slice(0).join(" ");
if (matador.length < 1) {

return msg.reply("** Xaine Bot | Kime kartopu atmak isterin? İsim yaz yada etiketleyiniz.**");

} else {

    msg.channel
      .send("<=====     :snowflake:")
      .then(nmsg => nmsg.edit("<=====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====    :snowflake:"))
      .then(nmsg => nmsg.edit("<====    :snowflake:"))
      .then(nmsg => nmsg.edit("<===   :snowflake:"))
      .then(nmsg => nmsg.edit("<===   :snowflake:"))
      .then(nmsg => nmsg.edit("<==  :snowflake:"))
      .then(nmsg => nmsg.edit("<==  :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit("<= :snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(":snowflake:"))
      .then(nmsg => nmsg.edit(`${matador} artık :snowman: oldu. :D :)`));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Kartopu','kartopu','KARTOPU','Kar-topu','kar-topu','KAR-TOPU'],
  permLevel: 0
};

exports.help = {
  name: "kartopu",
  description: "",
  usage: ""
};
