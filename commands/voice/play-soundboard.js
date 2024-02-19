const { getVoiceConnection, VoiceConnectionStatus, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const { join } = require('node:path');
const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play-sounboard')
        .setDescription('Joue un son de la soundboard du serveur'),
        //TODO select which sound to play

    async execute(interaction) {
        const connection = getVoiceConnection(interaction.guildId);
        const audioPlayer = createAudioPlayer();

        let resource = createAudioResource(join(__dirname, '../../ressources/ronfle.mp3'));

        const subscription = connection.subscribe(audioPlayer);

        audioPlayer.play(resource);
        interaction.reply('Son joué');
    },
};