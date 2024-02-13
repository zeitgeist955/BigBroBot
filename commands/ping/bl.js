const { SlashCommandBuilder } = require('discord.js');
const usersId = require('../../usersId.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bl')
		.setDescription('VITE ARCANIOS BL VITE'),

	async execute(interaction) {
		interaction.channel.send(`VITE LA BL <@${usersId.arcaniosId}> LA BL VITE VITE !`);
	},
};