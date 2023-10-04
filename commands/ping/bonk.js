module.exports = {
	name: 'bonk',
	description: 'Bonk Anaïs',
	execute(message, args) {
        const anaisId = '208688979392987136';
        
        message.reply('Anaïs fait encore des avances à mithe ?');
        message.channel.send(`Go to the horny jail <@${anaisId}> ! (ou <#1157424433187786835>)`);
	},
};