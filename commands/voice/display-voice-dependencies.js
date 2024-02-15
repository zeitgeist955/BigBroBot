const { SlashCommandBuilder } = require('discord.js');
const { generateDependencyReport } = require('@discordjs/voice');



module.exports = {
	data: new SlashCommandBuilder()
		.setName('display-voice-dependencies')
		.setDescription('(debug) Affiche la liste des dépendances installées'),

	async execute(interaction) {
		interaction.reply(generateDependencyReport());
	},
};

/*
Last report of the command
--------------------------------------------------
Core Dependencies
- @discordjs/voice: 0.16.1
- prism-media: 1.3.5

Opus Libraries
- @discordjs/opus: not found
- opusscript: not found

Encryption Libraries
- sodium-native: not found
- sodium: not found
- libsodium-wrappers: 0.7.13
- tweetnacl: not found

FFmpeg
- version: 6.0-essentials_build-www.gyan.dev
- libopus: yes
--------------------------------------------------
*/