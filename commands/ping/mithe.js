const { SlashCommandBuilder } = require('discord.js');
const usersId = require('../../usersId.json');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('mithe')
		.setDescription('Faire chier mithe avec une phrase random'),

	async execute(interaction) {
		const randomInt = getRandomInt(6);

        if (randomInt === 0) {
            interaction.channel.send(`Oublie pas ta fureur <@${usersId.mitheId}> !`);
        } else if (randomInt === 1) {
            interaction.channel.send(`Oublie pas le call prépot <@${usersId.mitheId}> !`);
        } else if (randomInt === 2) {
            interaction.channel.send(`Arrête avec les minorités <@${usersId.mitheId}> putain !`);
        } else if (randomInt === 3) {
            interaction.channel.send(`Arrête d'insulter Alt <@${usersId.mitheId}> putain ! Faites vous des bisous !`);
        } else if (randomInt === 4) {
            interaction.channel.send(`<@${usersId.mitheId}> y'a Anaïs qui te demande !`);
        } else if (randomInt === 5) {
            interaction.channel.send(`<@${usersId.mitheId}> les bénés stp !`);
        }
	},
};

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}