const commando = require("discord.js-commando");
class kanna extends commando.Command {
    constructor(client){
        super(client, {
            name:"kanna" ,
            group:"animegifs" ,
            memberName: "kanna" ,
            description: "prints out a gif of Kanna",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("http://imgur.com/J8iqfIU");
        break;
      case 1:
        message.channel.sendMessage("https://media.tenor.com/images/9d568282221594e661870388fde4dd5d/tenor.gif");
        break;
      case 2:
        message.channel.sendMessage("https://media.giphy.com/media/xgTs8CcCMbqb6/giphy.gif");
        break;
        

    }
    }
}

module.exports = kanna;