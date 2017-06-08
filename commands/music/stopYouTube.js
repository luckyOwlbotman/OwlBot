const commando = require("discord.js-commando");
class stop extends commando.Command {
    constructor(client){
        super(client, {
            name:"stop" ,
            group:"music" ,
            memberName: "stop" ,
            description: "stops the YouTube stream",

        }); 
    }
    
    async run(message, args) { 
        if (message.guild.voiceConnection)
        { 
            message.guild.voiceConnection.disconnect();
        }
    }
}

module.exports = stop;