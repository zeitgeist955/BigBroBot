const { SlashCommandBuilder } = require('discord.js');
const { QuickDB } = require("quick.db");
const db = new QuickDB();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Commande de test simple'),
	async execute(interaction) {
		interaction.reply('Pong.');

		//Record number of command usage
		await db.add('times.ping', 1);
		let timesUsed = 0;
		await db.get('times.ping').then(timesUsed => {
			this.timesUsed = timesUsed;
		});
		interaction.channel.send('This command has been used '+this.timesUsed+' times!');
	},
};