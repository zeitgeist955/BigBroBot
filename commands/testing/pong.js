const { SlashCommandBuilder } = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('pong')
		.setDescription('Pour les revers'),

	async execute(interaction) {
		interaction.reply('le revers arrive et **SMASH ! GOAAAAAAAAL !!!!**');
	},
};