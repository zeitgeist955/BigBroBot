const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
// const guild = ('695119331109109791');
// const config = require('./config.json');
// const intents = Discord.Intents.ALL;
const laNalGuildId = '559721067590189067';
const botId = '697841721459081347';
const botChanId = '688040488019820598';

// Create a new client instance
const client = new Discord.Client();

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Log in to Discord with your client's token
client.login(token);
client.commands = new Discord.Collection();
const commandFolders = fs.readdirSync('./commands');

for (const folder of commandFolders) {
	const commandFiles = fs.readdirSync(`./commands/${folder}`).filter(file => file.endsWith('.js'));
	for (const file of commandFiles) {
		const command = require(`./commands/${folder}/${file}`);
        // set a new item in the Collection
	    // with the key as the command name and the value as the exported module
		client.commands.set(command.name, command);
	}
}

client.on('message', message => {
    if (!message.content.startsWith(prefix) || message.author.bot) {
        return;
    }

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLocaleLowerCase();

	if (message.channel.id === botChanId) {
		//Pour logger des trucs sans flood, uniquement du chan radio boom boom
		//console.log(message);
	}

    if (!client.commands.has(commandName)) {
        return;
    }

    const command = client.commands.get(commandName);

    try {
		command.execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}