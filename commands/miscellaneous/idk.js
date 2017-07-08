const commando = require("discord.js-commando");
class idk extends commando.Command {
    constructor(client){
        super(client, {
            name:"idk" ,
            group:"miscellaneous" ,
            memberName: "idk" ,
            description: "prints out ¯\\_(ツ)_/¯",

        }); 
    }
    
    async run(message, args) {
     message.channel.sendMessage("¯\\_(ツ)_/¯");

    }
}


module.exports = idk;
/*
*/ 