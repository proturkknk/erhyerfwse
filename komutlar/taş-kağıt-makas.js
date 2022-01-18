const
    rps = [
        'makas',
        'taş',
        'kağıt'
    ],
    rpsF = (userAns, botAns) => {
        let choice = userAns,
            botChoice = botAns;
        if (choice === 'taş') {
            if (botChoice === 'makas') {
                return 'won';
            } else if (botChoice === 'kağıt') {
                return 'Kaybettin..';
            }

            return 'draw';
        } else if (choice === 'kağıt') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'makas') {
                return 'Kazandın!';
            }

            return 'draw';
        } else if (choice === 'makas') {
            if (botChoice === 'taş') {
                return 'lost';
            } else if (botChoice === 'kağıt') {
                return 'Kazandın!';
            }

            return 'draw';
        }
    };

exports.run = async (client, msg, args) => {
    if (!args[0]) {
        return msg.channel.send('⚠️ Hata! Lütfen seçim yapınız. Lütfen bir seçenek seçin. (Taş, Kağıt, Makas) örn: +tkm kağıt');
    }
    let choice = args[0].toLowerCase();
    choice = choice === 'taş' ? 'taş' : choice;
    choice = choice === 'kağıt' ? 'kağıt' : choice;
    choice = choice === 'makas' ? 'makas' : choice;
    if (!rps.includes(choice)) {
        return msg.channel.send('⚠️ Hata! Lütfen seçim yapınız. Lütfen bir seçenek seçin. (Taş, Kağıt, Makas) örn: +tkm kağıt');
    }
    let rand = Math.floor(Math.random() * 3);
    let botChoice = rps[rand];
    let result = rpsF(choice, botChoice);
    let answer = '';

    if (result === 'won') {
        answer = '🏆 Tebrikler, sen **Kazandın!** 🏆 \nSenin Seçtiğin: `' + choice + '` | Bot\'un Seçtiği: `' + botChoice + '`';
    } else if (result === 'lost') {
        answer = '❌ Bidahaki sefere iyi şanslar. **Kaybetin...** ❌ \nSenin Seçtiğin: `' + choice + '` | Bot\'s Seçtiği: `' + botChoice + '`';
    } else if (result === 'draw') {
        answer = '😐 Sonuç **Berabere** 😐\nSenin Seçimin: `' + choice + '` | Bot\'un Seçimi: `' + botChoice + '`';
    }

    msg.channel.send(answer);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Taş-kağıt-makas','taş-kağıt-makas','TAŞ-KAĞIT-MAKAS','tkm','Tkm','TKM'],
  permLevel: 0
 };
 
 exports.help = {
 name: 'tkm',
 description: 'Taş kağıt makas oyununu oynar.',
 usage: 'tkm'
 }