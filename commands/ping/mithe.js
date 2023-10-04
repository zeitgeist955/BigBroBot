const usersId = require('../../usersId.json');

module.exports = {
	name: 'mithe',
	description: 'Faire chier mithe',
	execute(message, args) {        
        const randomInt = getRandomInt(6);

        if (randomInt === 0) {
            message.channel.send(`Oublie pas ta fureur <@${usersId.mitheId}> !`);
        } else if (randomInt === 1) {
            message.channel.send(`Oublie pas le call prépot <@${usersId.mitheId}> !`);
        } else if (randomInt === 2) {
            message.channel.send(`Arrête avec les minorités <@${usersId.mitheId}> putain !`);
        } else if (randomInt === 3) {
            message.channel.send(`Arrête d'insulter Alt <@${usersId.mitheId}> putain ! Faites vous des bisous !`);
        } else if (randomInt === 4) {
            message.channel.send(`<@${usersId.mitheId}> y'a Anaïs qui te demande !`);
        } else if (randomInt === 5) {
            message.channel.send(`<@${usersId.mitheId}> les bénés stp !`);
        }
        
	},
};

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}