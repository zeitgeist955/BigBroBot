const db = require('quick.db');

module.exports = {
	name: 'ping',
	description: 'Commande de test simple',
	execute(message, args) {
		message.reply('Pong.');

		db.add('times.ping', 1);
		const timesUsed = db.get('times.ping');
		message.channel.send('This command has been used '+timesUsed+' times!');
	},
};