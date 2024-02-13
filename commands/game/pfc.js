const { SlashCommandBuilder } = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pfc')
        .setDescription('Joue à pierre feuille ciseaux')
        .addSubcommand(subCommand =>
            subCommand.setName('reset')
                .setDescription('Reset votre score au PFC avec le bot'))
        .addSubcommand(subCommand => 
            subCommand.setName('jouer')
                .setDescription('Jouer une partie de PFC')
                .addStringOption(option => 
                    option.setName('coup')
                    .setDescription('Choix du coup')
                    .setRequired(true)
                    .addChoices(
                        { name: 'pierre', value: 'pierre'},
                        { name: 'feuille', value: 'feuille'},
                        { name: 'ciseaux', value: 'ciseaux'}
                    )
                )
            ),

	async execute(interaction) {
        const pierre = new Coup('pierre', 'ciseaux', 'feuille');
        const feuille = new Coup('feuille', 'pierre', 'ciseaux');
        const ciseaux = new Coup('ciseaux', 'feuille', 'pierre');
        const possibilites = new Array(pierre, feuille, ciseaux);

        const playerName = interaction.user.username;
        const userChoice = interaction.options.getString('coup');
        const userCoup = possibilites.find(coup => coup.name === userChoice);

        if (interaction.options.getSubcommand() === 'reset') {
            resetPlayerData(playerName);
            interaction.reply(`reset de ton historique de jeu au PFC !`);
            return;
        }

        const botCoup = possibilites[getRandomInt(3)];
        
        if (botCoup.name === userCoup.name) {
            interaction.reply(`${botCoup.name} ! Égalité !`);
        } else if (botCoup.counter === userCoup.name) {
            await db.add(`pfc.botScoreAgainstPlayer.${playerName}`, 1);
            interaction.reply(`${botCoup.name} ! J'ai gagné !`);
        } else if (botCoup.counteredBy === userCoup.name) {
            await db.add(`pfc.playerScore.${playerName}`, 1);
            interaction.reply(`${botCoup.name} ! J'ai perdu, bien joué !`);
        }

        const playerScore = await db.get(`pfc.playerScore.${playerName}`) || 0;
        const botScore = await db.get(`pfc.botScoreAgainstPlayer.${playerName}`) || 0;
        interaction.channel.send(`Score : ${playerName} ${playerScore} - ${botScore} BigBroBot`);

        await db.add(`pfc.numberOfGameAgainstPlayer.${playerName}`, 1);
        const numberOfGameAgainstPlayer = await db.get(`pfc.numberOfGameAgainstPlayer.${playerName}`) || 0;
        interaction.channel.send(`Nombre de parties jouées par ${playerName} : ${numberOfGameAgainstPlayer}`);
	},
};

async function resetPlayerData(playerName) {
    await db.delete(`pfc.botScoreAgainstPlayer.${playerName}`);
    await db.delete(`pfc.playerScore.${playerName}`);
    await db.delete(`pfc.numberOfGameAgainstPlayer.${playerName}`);
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