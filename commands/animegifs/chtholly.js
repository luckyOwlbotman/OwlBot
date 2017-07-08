const commando = require("discord.js-commando");
class chtholly extends commando.Command {
    constructor(client){
        super(client, {
            name:"chtholly" ,
            group:"animegifs" ,
            memberName: "chtholly" ,
            description: "prints out a gif of Chtholly",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("http://www.amberleeconnors.com/uploads/7/0/9/2/70921833/tumblr-oo9zjy8onp1ta7pubo1-500_orig.gif");
        break;
      case 1:
        message.channel.sendMessage("https://68.media.tumblr.com/787adad19e0418e9a39cbb79c6cf282e/tumblr_oomrl0hDII1tqsu3ro1_540.gif");
        break;
      case 2:
        message.channel.sendMessage("http://data.whicdn.com/images/286017063/large.gif");
        break;
        

    }
    }
}

module.exports = chtholly;