const { SlashCommandBuilder } = require('discord.js');
const usersId = require('../../usersId.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('hunt')
		.setDescription('Ping antoine'),

	async execute(interaction) {
		interaction.reply('Tu te demande qui est le meilleur chasseur ?');
		interaction.channel.send(`C'est bien évidemment <@${usersId.antoineId}> !`);
	},
};