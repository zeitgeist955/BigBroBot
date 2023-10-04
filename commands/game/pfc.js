const db = require('quick.db');

module.exports = {
	name: 'pfc',
	description: 'Joue à pierre feuille ciseaux',
	execute(message, args) {
        const pierre = new Coup('pierre', 'ciseaux', 'feuille');
        const feuille = new Coup('feuille', 'pierre', 'ciseaux');
        const ciseaux = new Coup('ciseaux', 'feuille', 'pierre');
        const possibilites = new Array(pierre, feuille, ciseaux);

        const playerName = message.author.username;
        const userChoice = args[0];
        const userCoup = possibilites.find(coup => coup.name === userChoice);

        if (args[0] === 'reset') {
            resetPlayerData(playerName);
        }
        
        if (!userCoup) {
            message.reply("Impossible d'identifier ton choix de coup, exemple de choix correct : '&pfc ciseaux'");
            return;
        }

        const botCoup = possibilites[getRandomInt(3)];
        
        if (botCoup.name === userCoup.name) {
            message.reply(`${botCoup.name} ! Égalité !`);
        } else if (botCoup.counter === userCoup.name) {
            db.add(`pfc.botScoreAgainstPlayer.${playerName}`, 1);
            message.reply(`${botCoup.name} ! J'ai gagné !`);
        } else if (botCoup.counteredBy === userCoup.name) {
            db.add(`pfc.playerScore.${playerName}`, 1);
            message.reply(`${botCoup.name} ! J'ai perdu, bien joué !`);
        }

        const playerScore = db.get(`pfc.playerScore.${playerName}`) || 0;
        const botScore = db.get(`pfc.botScoreAgainstPlayer.${playerName}`) || 0;
        message.channel.send(`Score : ${playerName} ${playerScore} - ${botScore} BigBroBot`);

        db.add(`pfc.numberOfGameAgainstPlayer.${playerName}`, 1);
        const numberOfGameAgainstPlayer = db.get(`pfc.numberOfGameAgainstPlayer.${playerName}`);
        message.channel.send(`Nombre de parties jouées par ${playerName} : ${numberOfGameAgainstPlayer}`);
        
	},
};

function resetPlayerData(playerName) {
    db.delete(`pfc.botScoreAgainstPlayer.${playerName}`);
    db.delete(`pfc.playerScore.${playerName}`);
    db.delete(`pfc.numberOfGameAgainstPlayer.${playerName}`);
    message.reply(`reset de ton historique de jeu au PFC !`);
    return;
}

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

class Coup {
    constructor(name, counter, counteredBy) {
        this.name = name;
        this.counter = counter;
        this.counteredBy = counteredBy;
    }
}