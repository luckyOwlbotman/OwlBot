const commando = require("discord.js-commando");
class Illuminati extends commando.Command {
    constructor(client){
        super(client, {
            name:"illuminati" ,
            group:"miscellaneous" ,
            memberName: "illuminati" ,
            description: "prints out a triangle",

        });
    }
    
    async run(message, args) {
        var jankworkaround = "\\\\";
     message.channel.sendMessage("░░░░ / "+jankworkaround+"░░░░\n░░░ /----"+jankworkaround+"░░░\n░░ /(------)"+jankworkaround+"░░░\n░ /(----------)"+jankworkaround+"░░");

    }
}


module.exports = Illuminati;
/*
*/ 