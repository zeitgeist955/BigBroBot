const { SlashCommandBuilder } = require('discord.js');
const usersId = require('../../usersId.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('bonk')
		.setDescription('Bonk Anaïs'),

	async execute(interaction) {
		const NSFWchanId = '1157424433187786835';

		interaction.reply('Anaïs fait encore des avances à mithe ?');
		interaction.channel.send(`Go to the horny jail <@${usersId.anaisId}> ! (ou <#${NSFWchanId}>)`);
	},
};