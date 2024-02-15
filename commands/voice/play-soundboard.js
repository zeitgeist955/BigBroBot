const { getVoiceConnection, VoiceConnectionStatus, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const { join } = require('node:path');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play-sounboard')
		.setDescription('Joue un son de la soundboard du serveur'),
        //TODO select which sound to play

	async execute(interaction) {
        //console.log(interaction);
        const connection = getVoiceConnection(interaction.guildId);
        //console.log(connection);

        const audioPlayer = createAudioPlayer();

        let resource = createAudioResource(join(__dirname, 'ronfle.mp3'));
        console.log(resource);

        const subscription = connection.subscribe(audioPlayer);

        audioPlayer.play(resource);

        //await connection.play('quack');
        interaction.reply('Son joué');
	},
};