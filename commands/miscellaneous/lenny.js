const commando = require("discord.js-commando");
class lenny extends commando.Command {
    constructor(client){
        super(client, {
            name:"lenny" ,
            group:"miscellaneous" ,
            memberName: "lenny" ,
            description: "prints out ( ͡° ͜ʖ ͡°)",

        }); 
    }
    
    async run(message, args) {
     message.channel.sendMessage("( ͡° ͜ʖ ͡°)");// it looks better in discord

    }
}


module.exports = lenny;
/*
*/ 