const { SlashCommandBuilder } = require('discord.js');
const usersId = require('../../usersId.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('wednesday')
		.setDescription('Ping ludo avec un message différent si on est mercredi'),

	async execute(interaction) {
        const now = new Date();
        
        if (now.getDay() === 3) {
            interaction.reply('Its wenesday my dude');
            interaction.channel.send(`Vite !! Il faut prévenir <@${usersId.ludoId}> !!!`);
        } else {
            interaction.reply('Its not wenesday my dude :(');
            interaction.channel.send(`<@${usersId.ludoId}> va pas être content :(`)
        }
	},
};