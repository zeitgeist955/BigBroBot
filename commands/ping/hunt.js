const usersId = require('../../usersId.json');

module.exports = {
	name: 'hunt',
	description: 'Ping antoine',
	execute(message, args) {        
        message.reply('Tu te demande qui est le meilleur chasseur ?');
        message.channel.send(`C'est bien évidemment <@${usersId.antoineId}> !`);
	},
};