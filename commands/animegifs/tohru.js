const commando = require("discord.js-commando");
class tohru extends commando.Command {
    constructor(client){
        super(client, {
            name:"tohru" ,
            group:"animegifs" ,
            memberName: "tohru" ,
            description: "prints out a gif of Tohru",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("http://i0.kym-cdn.com/photos/images/newsfeed/001/213/320/02e.gif");
        break;
      case 1:
        message.channel.sendMessage("http://i3.kym-cdn.com/photos/images/newsfeed/001/221/552/112.gif");
        break;
      case 2:
        message.channel.sendMessage("https://puu.sh/v3jep.gif");
        break;
        

    }
    }
}

module.exports = tohru;