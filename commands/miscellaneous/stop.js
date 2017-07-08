const commando = require("discord.js-commando");
class stop extends commando.Command {
    constructor(client){
        super(client, {
            name:"stop" ,
            group:"miscellaneous" ,
            memberName: "stop" ,
            description: "prints out a gif of filthyfrank saying stop",

        }); 
    }
    
    async run(message, args) {
     message.channel.sendMessage("http://i.imgur.com/CoWZ05t.gif");

    }
}


module.exports = stop;