const commando = require("discord.js-commando");
class diceRoll extends commando.Command {
    constructor(client){
        super(client, {
            name:"diceroll" ,
            group:"random" ,
            memberName: "diceroll" ,
            description: "Rolls a 8 sided dice",

        });
    }
    
    async run(message, args) {
          var max = 8; var min = 1;
    message.channel.sendMessage(Math.floor(Math.random() * (max - min + 1)) + min);

    }
}

module.exports = diceRoll;