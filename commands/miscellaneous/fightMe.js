const commando = require("discord.js-commando");
class fightMe extends commando.Command {
    constructor(client){
        super(client, {
            name:"fight" ,
            group:"miscellaneous" , 
            memberName: "fight" ,
            description: "prints out ง ͠° ͟ل͜ ͡°)ง",

        }); 
    }
    
    async run(message, args) {
     message.channel.sendMessage("ง ͠° ͟ل͜ ͡°)ง"); // it looks better in discord

    }
}


module.exports = fightMe;