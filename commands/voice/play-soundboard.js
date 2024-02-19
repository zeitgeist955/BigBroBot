const { getVoiceConnection, createAudioPlayer, createAudioResource } = require('@discordjs/voice');
const { join } = require('node:path');
const { SlashCommandBuilder } = require('discord.js');

const soundLibrary = require('../../ressources/sound-library.js');
const library = soundLibrary.LIBRARY; //Load file otherwise the deloy-command cannot reach it

module.exports = {
    data: new SlashCommandBuilder()
        .setName('play-sounboard')
        .setDescription('Joue un son de la soundboard du serveur')
        .addStringOption(option => 
            option.setName('son')
            .setDescription('Choix du son')
            .setRequired(true)
            .addChoices(...library) //Spread the array, limit to 25 files : https://github.com/discordjs/discord.js/discussions/7825
        ),

    async execute(interaction) {
        const connection = getVoiceConnection(interaction.guildId);
        const audioPlayer = createAudioPlayer();

        const fileChoice = interaction.options.getString('son');

        let resource = createAudioResource(join(__dirname, '../../ressources/'+fileChoice));

        const subscription = connection.subscribe(audioPlayer);

        audioPlayer.play(resource);
        interaction.reply('Son joué'); //TODO advert if the file isnt found or an error occurs
    },
};