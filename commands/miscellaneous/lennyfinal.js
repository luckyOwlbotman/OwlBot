const commando = require("discord.js-commando");
class lennyfinal extends commando.Command {
    constructor(client){
        super(client, {
            name:"finalformlenny" ,
            group:"miscellaneous" ,
            memberName: "finalformlenny" ,
            description: "prints out a huge lenny face ",

        }); 
    }
    
    async run(message, args) {
     message.channel.sendMessage("░░░░░░░░░░░░▄▄▄▄░░░░░░░░░░░░░░░░░░░░░░░▄▄▄▄▄\n░░░█░░░░▄▀█▀▀▄░░▀▀▀▄░░░░▐█░░░░░░░░░▄▀█▀▀▄░░░▀█▄\n░░█░░░░▀░▐▌( ͡° ͜ʖ ͡°)▐▌░░░▀░░░▐█░░░░░░░░▀░▐▌( ͡° ͜ʖ ͡°)▐▌░░█▀\n░▐▌░░░░░░░▀▄▄▀░░░░░░░░░░▐█▄▄░░░░░░░░░▀▄▄▀░░░░░▐▌\n░█░░░░░░░░░░░░░░░░░░░░░░░░░▀█░░░░░░░░░░░░░░░░░░█\n▐█░░░░░░░░░░░░░░░░░░░░░░░░░░█▌░░░░░░░░░░░░░░░░░█\n▐█░░░░░░░░░░░░░░░░░░░░░░░░░░█▌░░░░░░░░░░░░░░░░░█\n░█░░░░░░░░░░░░░░░░░░░░█▄░░░▄█░░░░░░░░░░░░░░░░░░█\n░▐▌░░░░░░░░░░░░░░░░░░░░▀███▀░░░░░░░░░░░░░░░░░░▐▌\n░░█░░░░░░░░░░░░░░░░░▀▄░░░░░░░░░░▄▀░░░░░░░░░░░░█\n░░░█░░░░░░░░░░░░░░░░░░▀▄▄▄▄▄▄▄▀▀░░░░░░░░░░░░░█");// that is ont long line of code

    }
}


module.exports = lennyfinal;
/*
*/ 