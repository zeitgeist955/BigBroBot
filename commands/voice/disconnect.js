const { getVoiceConnection } = require('@discordjs/voice');
const { SlashCommandBuilder } = require('discord.js');
const config = require('../../config.json');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('disconnect')
		.setDescription('Déconnecte le bot du channel vocal auquel il est connecté'),

	async execute(interaction) {

        const connection = getVoiceConnection(interaction.guildId);

        if (connection) {
            connection.destroy();
            interaction.reply('Le bot a bien été déconnecté');
        } else {
            interaction.reply('Erreur lors de la récupération de la connection vocale au serveur actuel');
        }
        
	},
};