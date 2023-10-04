module.exports = {
	name: 'wednesday',
	description: 'Ping ludo avec un message différent si on est mercredi',
	execute(message, args) {
        const now = new Date();
        const ludoId = '410474028499992578';
        
        if (now.getDay() === 3) {
            message.reply('Its wenesday my dude');
            message.channel.send(`Vite !! Il faut prévenir <@${ludoId}> !!!`);
        } else {
            message.reply('Its not wenesday my dude :(');
            message.channel.send(`<@${ludoId}> va pas être content :(`)
        }
	},
};