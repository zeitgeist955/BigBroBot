module.exports = {
	name: 'hunt',
	description: 'Ping antoine',
	execute(message, args) {
        const antoineId = '261854298340720640';
        
        message.reply('Tu te demande qui est le meilleur chasseur ?');
        message.channel.send(`C'est bien évidemment <@${antoineId}> !`);
	},
};