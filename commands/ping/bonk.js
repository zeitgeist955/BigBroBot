const usersId = require('../../usersId.json');

module.exports = {
	name: 'bonk',
	description: 'Bonk Anaïs',
	execute(message, args) {
		const NSFWchanId = '1157424433187786835';
        
        message.reply('Anaïs fait encore des avances à mithe ?');
        message.channel.send(`Go to the horny jail <@${usersId.anaisId}> ! (ou <#${NSFWchanId}>)`);
	},
};