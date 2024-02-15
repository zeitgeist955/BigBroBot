const fs = require('node:fs');
const path = require('node:path');
const { token } = require('./token.json');
const { Client, Collection, Events, GatewayIntentBits } = require('discord.js');
const { botRadioBoomBoomChanId } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildVoiceStates] });

// When the client is ready, run this code (only once)
client.once(Events.ClientReady, readyClient => {
	console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
client.login(token);
client.commands = new Collection();

const foldersPath = path.join(__dirname, 'commands');
const commandFolders = fs.readdirSync(foldersPath);

for (const folder of commandFolders) {
	const commandsPath = path.join(foldersPath, folder);
	const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const filePath = path.join(commandsPath, file);
		const command = require(filePath);
        // set a new item in the Collection
	    // with the key as the command name and the value as the exported module
		if ('data' in command && 'execute' in command) {
			client.commands.set(command.data.name, command);
		} else {
			console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
		}
	}
}

client.on(Events.InteractionCreate, interaction => {

	if (!interaction.isChatInputCommand()) {
		return;
	}
	//console.log(interaction);

	const command = interaction.client.commands.get(interaction.commandName);

	if (interaction.channelId === botRadioBoomBoomChanId) {
		//Pour logger des trucs sans flood, uniquement du chan radio boom boom
		//console.log(message);
	}

    try {
		command.execute(interaction);
	} catch (error) {
		console.error(error);
		interaction.reply('there was an error trying to execute that command!');
	}
});

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}