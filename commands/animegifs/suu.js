const commando = require("discord.js-commando");
class suu extends commando.Command {
    constructor(client){
        super(client, {
            name:"suu" ,
            group:"animegifs" ,
            memberName: "suu" ,
            description: "prints out a gif of Suu",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://38.media.tumblr.com/93c535d39338a8ba8bc82cd90bf34b7d/tumblr_nv3ljepS571seyt9ho1_500.gif");
        break;
      case 1:
        message.channel.sendMessage("http://imgur.com/0PJfzCZ");
        break;
      case 2:
        message.channel.sendMessage("http://imgur.com/AnDCAcR");
        break;
        

    }
    }
}

module.exports = suu;