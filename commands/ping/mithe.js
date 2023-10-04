module.exports = {
	name: 'mithe',
	description: 'Faire chier mithe',
	execute(message, args) {
        const mitheId = '238394476140298242';
        
        const randomInt = getRandomInt(6);

        if (randomInt === 0) {
            message.channel.send(`Oublie pas ta fureur <@${mitheId}> !`);
        } else if (randomInt === 1) {
            message.channel.send(`Oublie pas le call prépot <@${mitheId}> !`);
        } else if (randomInt === 2) {
            message.channel.send(`Arrête avec les minorités <@${mitheId}> putain !`);
        } else if (randomInt === 3) {
            message.channel.send(`Arrête d'insulter Alt <@${mitheId}> putain ! Faites vous des bisous !`);
        } else if (randomInt === 4) {
            message.channel.send(`<@${mitheId}> y'a Anaïs qui te demande !`);
        } else if (randomInt === 5) {
            message.channel.send(`<@${mitheId}> les bénés stp !`);
        }
        
	},
};

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}