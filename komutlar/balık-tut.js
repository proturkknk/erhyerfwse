exports.run = (client, message) => {

message.channel.send("Balık Tuttun! Balığı Çekiyorsun...").then(message => {

var matador = [

      "Sazan Tuttun! :fish:",
      "Köpek Balığı Tuttun! İyi Para Eder Sat Sat :D",
      "Uskumru Tuttun! :fish:",
      "Mezgit Tuttun! Havyarıda Var hee ;) :fish:",
      "Japon Balığı Tuttun Yemeyi Düşünmüyorsun Herhalde? :D",
      "Hamsi Tuttun! :fish:",
      "Levrek Tuttun! :fish:",
      "Hiçbirşey Tutamadın Maalesef.. Ama tekrar deneyebilirsin! :wastebasket:",
      "Alabalık Tuttun! :fish:",
      "Maalesef Balık Oltadan Kaçtı! :wastebasket:",
      "İstavrit Tuttun! :fish:"

    ];

    var matador = matador[Math.floor(Math.random() * matador.length)];
    message.edit(`${matador}`);
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['balıktut','Balıktut','Balık-tut','balık-tut','BALIKTUT','BALIK-TUT'],
  permLevel: 0
};

exports.help = {
  name: "balık-tut",
  description: "Balık Tutarsın.",
  usage: "balıktut"
};
