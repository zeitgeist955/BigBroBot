const { joinVoiceChannel } = require('@discordjs/voice');
const { SlashCommandBuilder, ChannelType } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('join-vocal')
		.setDescription('Demande au bot de se connecter sur un channel vocal du serveur au choix')
		.addChannelOption((option) => option.setName('channel').setDescription('Le channel vocal à rejoindre').setRequired(true).addChannelTypes(ChannelType.GuildVoice)),

	async execute(interaction) {
		const voiceChannel = interaction.options.getChannel('channel');
		const connection = joinVoiceChannel({
			channelId: voiceChannel.id,
			guildId: interaction.guildId,
			adapterCreator: interaction.guild.voiceAdapterCreator,
		});

		interaction.reply('Connexion au channel réussi');
	},
	};