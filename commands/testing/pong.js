const { SlashCommandBuilder } = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pong')
		.setDescription('Pour les revers')
		.addStringOption(option => 
			option.setName('result')
				.setDescription('Le résultat du revers')
				.setRequired(true)
				.addChoices(
					{ name: 'Gagnant', value: 'win'},
					{ name: 'Perdant', value: 'lose'}
				)),

	async execute(interaction) {
		const result = interaction.options.getString('result'); // Alternative si unrequired & pas de valeur : ?? 'No input provided'

		if (result === 'win') {
			interaction.reply("le revers arrive eeeeeeeeet... la balle sort de la table, t'as gagné le point");
		} else {
			interaction.reply('le revers arrive et **SMASH ! POINT POUR LE BOT !!!!**');
		}
	},
};