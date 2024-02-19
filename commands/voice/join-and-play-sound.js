const join = require('./join-vocal.js');
const playSoundboard = require('./play-soundboard.js');
const disconnect = require('./disconnect.js');
const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join-and-play-sound')
		.setDescription('Demande au bot de se connecter sur un channel vocal du serveur au choix et de jouer un son')
		.addChannelOption((option) => option.setName('channel').setDescription('Le channel vocal à rejoindre').setRequired(true).addChannelTypes(ChannelType.GuildVoice)),

    async execute(interaction) {

        join.execute(interaction); //FIXME doesnt work because of interaction.reply(message) of both commands
        playSoundboard.execute(interaction); //FIXME allow selection of sound file to play

        /*
        // TODO find a way to disconnect the bot AFTER playing the sound and not at the same time
        .then(_ => {
                disconnect.execute(interaction);
            });
        */
    },
};