const usersId = require('../../usersId.json');

module.exports = {
	name: 'wednesday',
	description: 'Ping ludo avec un message différent si on est mercredi',
	execute(message, args) {
        const now = new Date();
        
        if (now.getDay() === 3) {
            message.reply('Its wenesday my dude');
            message.channel.send(`Vite !! Il faut prévenir <@${usersId.ludoId}> !!!`);
        } else {
            message.reply('Its not wenesday my dude :(');
            message.channel.send(`<@${usersId.ludoId}> va pas être content :(`)
        }
	},
};