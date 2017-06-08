const commando = require("discord.js-commando");
class mugi extends commando.Command {
    constructor(client){
        super(client, {
            name:"mugi" ,
            group:"animegifs" ,
            memberName: "mugi" ,
            description: "prints out a gif of Mugi",

        });
    }
    
    async run(message, args) {
       var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://media.giphy.com/media/ItD6b2vvnHBTy/giphy.gif");
        break;
      case 1:
        message.channel.sendMessage("http://orig07.deviantart.net/17a8/f/2016/126/4/4/1__94__by_kyoflameashhylden-da1h7g7.gif");
        break;
      case 2:
        message.channel.sendMessage("http://imgur.com/fRj3IiG");
        break;
        

    }
    }
}

module.exports = mugi;