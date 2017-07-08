const commando = require("discord.js-commando");
class haruka  extends commando.Command {
    constructor(client){
        super(client, {
            name:"haruka" ,
            group:"animegifs" ,
            memberName: "haruka" ,
            description: "prints out a gif of Haruka",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("http://fanaru.com/sakura-trick/image/227982-sakura-trick-haruka-i-you-gif.gif");
        break;
      case 1:
        message.channel.sendMessage("http://pa1.narvii.com/5686/26514640f2ccd95a3e41a785217696b20a40e854_hq.gif");
        break;
      case 2:
        message.channel.sendMessage("http://data.whicdn.com/images/214239585/large.gif");
        break;
        

    }
    }
}

module.exports = haruka;