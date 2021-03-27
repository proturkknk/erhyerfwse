const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const moment = require("moment");
var Jimp = require("jimp");
const { Client, Util } = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
const http = require("http");
require("./utils/eventLoader.js")(client);
const path = require("path");
const snekfetch = require("snekfetch");
const express = require("express");
const session = require("express-session");
const passport = require("passport");
const Strategy = require("passport-discord").Strategy;
const app = express();
app.use("/views", express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");
app.listen(process.env.PORT);

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

var scopes = ["identify", "guilds"];

passport.use(
  new Strategy(
    {
      clientID: "774235071653216286",
      clientSecret: process.env.SECRET,
      callbackURL:
        "https://xxxxxxxxxxxaa-w-e2340-2304-po32lk4k2l-3.glitch.me/login",
      scope: scopes
    },
    function(accessToken, refreshToken, profile, done) {
      process.nextTick(function() {
        return done(null, profile);
      });
    }
  )
);
app.use("/views", express.static(path.join(__dirname, "static")));
app.set("view engine", "ejs");
app.get("/", (request, response) => {
  response.render("index");
});
app.use(
  session({
    secret: "...",
    resave: false,
    saveUninitialized: false
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.get("/login", passport.authenticate("discord"), function(req, res) {
  res.redirect("/home");
});

app.get("/logout", function(req, res) {
  req.logout();
  res.redirect("/");
});
app.get("/home", checkAuth, (req, res) => {
  res.render("home", { user: req.user });
});
app.get('/share', checkAuth, (req, res) => {
  let sunucuda = false
  req.user.guilds.forEach(g => {
    if(g.id == '714084499465568287') sunucuda = true
  })
  if(sunucuda){
    let sunucu = client.guilds.cache.get('714084499465568287')
    sunucu.members.fetch({user: req.user.id, force: true}).then(m => {
      if(m.roles.cache.some(r => r.id == '823466801387405362')) {
        res.render('share', {user: req.user})
      }else{
        res.send('Bu özelliği kullanabilmek için Kod Paylaşım rolüne sahip olman gerekiyor.')
      }
    })
  }else{
    res.send('Bu özelliği kullanman için sunucumuzda bulunman gerekiyor: https://discord.gg/Kekc2pU')
  }
})
app.listen(8080);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

var prefix = ayarlar.prefix;

const log = message => {
  console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    log(`Yüklenen komut: ${props.help.name}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
  if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
  if (message.author.id === ayarlar.sahip) permlvl = 4;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});

client.login(process.env.token);

client.on("message", async message => {
  if (message.author.bot) return;

  if (!message.guild) return;

  let prefix = db.get(`prefix_${message.guild.id}`);

  if (prefix === null) prefix = prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content

    .slice(prefix.length)

    .trim()

    .split(/ +/g);

  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});

client.on("message", async (message, bot) => {
  if (message.content.startsWith("/spotify")) {
    let user;
    if (message.mentions.users.first()) {
      user = message.mentions.users.first();
    } else {
      user = message.author;
    }

    let convert = require("parse-ms");

    let status = user.presence.activities[0];

    if (
      user.presence.activities.length === 0 ||
      (status.name !== "Spotify" && status.type !== "LISTENING")
    )
      return message.channel.send("Bu kullanıcı Müzik Dinlemiyor.");

    let image = `https://i.scdn.co/image/${status.assets.largeImage.slice(8)}`,
      url = `https://open.spotify.com/track/${status.syncID}`,
      name = status.details,
      artist = status.state,
      album = status.assets.largeText,
      timeStart = status.timestamps.start,
      timeEnd = status.timestamps.end,
      timeConvert = convert(timeEnd - timeStart);

    let minutes =
      timeConvert.minutes < 10
        ? `0${timeConvert.minutes}`
        : timeConvert.minutes;
    let seconds =
      timeConvert.seconds < 10
        ? `0${timeConvert.seconds}`
        : timeConvert.seconds;

    let time = `${minutes}:${seconds}`;

    const embed = new Discord.MessageEmbed()
      .setAuthor(
        "Spotify Parça Bilgisi",
        "https://image.flaticon.com/icons/png/512/2111/2111624.png"
      )
      .setColor(0x1ed768)
      .setThumbnail(image)
      .addField("İsim:", name, true)
      .addField("Albüm:", album, true)
      .addField("Artist:", artist, true)
      .addField("Süre:", time, false)
      .addField("Spotifyda Dinle!", `[\`${artist} - ${name}\`](${url})`, false);
    message.channel.send(embed);
  }
});

client.on("message", async (msg, member, guild) => {
  let i = await db.fetch(`saas_${msg.guild.id}`);
  if (i === "açık") {
    if (msg.content.toLowerCase() === "sa") {
      msg.reply("**Aleyküm Selam, Hoşgeldin. Nasılsın? :)**");
    }
  }
});
//Muteliyken sw den çıkana mute
client.on("guildMemberAdd", async member => {
  let mute = db.fetch(`muterol_${member.guild.id}`);
  let mutelimi = db.fetch(`muteli_${member.guild.id + member.id}`);
  if (!mutelimi) return;
  if (mutelimi == "muteli") {
    member.roles.add(mute);
    member.send("Muteliyken Sunucudan Çıktığın için Yeniden Mutelendin!");
    const modlog = db.fetch(`modlogKK_${member.guild.id}`);
    if (!modlog) return;
    db.delete(`muteli_${member.guild.id + member.id}`);
    const embed = new Discord.MessageEmbed()
      .setThumbnail(member.avatarURL())
      .setColor(0x00ae86)
      .setTimestamp()
      .addField("Eylem:", "**Mute**")
      .addField("Kullanıcı:", `${member} (${member.id})`)
      .addField("Yetkili:", `${client.user} (${client.user.id})`)
      .addField("Süre", "10m")
      .addField("Sebep", "Muteliyken Sunucudan Çıkmak.");
    member.guild.channels.cache.get(modlog).send(embed);
  }
});
//Muteliyken s
client.on("guildCreate", guild => {
  guild.owner.send(`
**Merhaba, __${guild.owner.user.username}!__**
**Beni __Kurucusu__ olduğun __${guild.name}__ sunucusuna eklediğin için teşekkürler!**

Botumuzun destek sunucusuna gelmek isterseniz; (https://discord.gg/Kekc2pU) bu linkten  gelebilirsiniz.
`);
});
client.on("guildMemberAdd", async (member, message, msg) => {
  const fakehesapp = db.fetch(`fake_${member.guild.id}`);

  if (fakehesapp == "açık") {
    var moment = require("moment");
    require("moment-duration-format");
    moment.locale("tr");
    var { Permissions } = require("discord.js");
    var x = moment(member.user.createdAt)
      .add(30, "days")
      .fromNow();
    var user = member.user;
    x = x.replace("birkaç saniye önce", " ");
    if (!x.includes("önce") || x.includes("sonra") || x == " ") {
      let rol = db.fetch(`fakerol_${member.guild.id}`);
      member.user.send(
        "Hesabınız 30 günden önce açıldığı için cezalıya atıldınız, yetkililere bildirerek açtırabilirsiniz."
      );

      let kanalcık = await db.fetch(`fakekanal_${member.guild.id}`);
      let kanal = member.guild.channels.cache.find(r => r.id === kanalcık);

      const embedd = new Discord.MessageEmbed()
        .setTitle("Fake hesap yakalandı!")
        .setTimestamp()
        .setDescription(
          `Bir fake hesap sisteme yakalandı ve rolü verildi. **${member}**`
        )
        .setTimestamp()
        .setColor("RANDOM");
      kanal.send(embedd);
      member.roles.add(rol);
    } else {
    }
  }
});
client.on("guildDelete", guild => {
  let rrrsembed = new Discord.RichEmbed()

    .setColor("RED")
    .setTitle(" Bot Kicklendi ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.get("822453879676600320").send(rrrsembed);
});

//--------------------------------------------------------//

client.on("guildCreate", guild => {
  let rrrsembed = new Discord.RichEmbed()

    .setColor("GREEN")
    .setTitle(" Bot Eklendi ")
    .addField("Sunucu Adı:", guild.name)
    .addField("Sunucu sahibi", guild.owner)
    .addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
    .addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
    .addField("Sunucudaki Kişi Sayısı:", guild.memberCount);

  client.channels.get("822453879676600320").send(rrrsembed);
});

client.on("guildCreate", async guild => {
  let embed = new Discord.MessageEmbed();
  var botOwnerID = "696365117063036986";
  var guildOwner = guild.owner.user;
  var guildOwnerTag = guild.owner.user.tag;
  var guildName = guild.name;
  var guildMemberCount = guild.memberCount;

  embed.setTitle(`Yeni Sunucu!`);
  embed.addField("Sunucu adı", guildName);
  embed.addField("Sunucu üye sayısı", guildMemberCount);
  embed.addField(`Sunucu sahibi`, guildOwnerTag);
  embed.addField(
    "Şuan ki Kullanıcı : ",
    client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
    true
  );
  embed.addField(
    "Şuan ki Sunucu sayısı",
    client.guilds.cache.size.toLocaleString(),
    true
  );
  embed.setColor("RANDOM");

  embed.setFooter(guildName, guild.iconURL);
  embed.setThumbnail(guild.iconURL);

  client.users.cache.get(botOwnerID).send(embed);
});
client.on("guildDelete", async guild => {
  let embed = new Discord.MessageEmbed();
  var botOwnerID = "696365117063036986";
  var guildOwner = guild.owner.user;
  var guildOwnerTag = guild.owner.user.tag;
  var guildName = guild.name;
  var guildMemberCount = guild.memberCount;

  embed.setTitle("Sunucudan Attılar!");
  embed.addField("Sunucu adı", guildName);
  embed.addField("Sunucu üye sayısı", guildMemberCount);
  embed.addField(`Sunucu sahibi`, guildOwnerTag);
  embed.addField(
    "Şuan ki Kullanıcı : ",
    client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
    true
  );
  embed.addField(
    "Şuan ki Sunucu sayısı",
    client.guilds.cache.size.toLocaleString(),
    true
  );
  embed.setColor("RED");
  embed.setFooter(guildName, guild.iconURL);
  embed.setThumbnail(guild.iconURL);

  client.users.cache.get(botOwnerID).send(embed);
});

function checkAuth(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect(
    "https://xxxxxxxxxxxaa-w-e2340-2304-po32lk4k2l-3.glitch.me/login"
  );
}
