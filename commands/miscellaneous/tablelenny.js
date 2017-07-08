const commando = require("discord.js-commando");
class tablelenny extends commando.Command {
    constructor(client){
        super(client, {
            name:"tablelenny" ,
            group:"miscellaneous" ,
            memberName: "tablelenny" ,
            description: "prints out (╯°□°)╯︵ ┻━┻ ",

        }); 
    }
    
    async run(message, args) {
       
     message.channel.sendMessage("(╯°□°)╯︵ ┻━┻");

    }
}


module.exports = tablelenny;
/*
*/ 