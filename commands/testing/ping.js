const { SlashCommandBuilder } = require('discord.js');
//const db = require('quick.db');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Commande de test simple'),
	execute(interaction) {
		interaction.reply('Pong.');

		/* Record number of command usage
		db.add('times.ping', 1);
		const timesUsed = db.get('times.ping');
		interaction.channel.send('This command has been used '+timesUsed+' times!');
		*/
	},
};