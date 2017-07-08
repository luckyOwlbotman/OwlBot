const commando = require("discord.js-commando");
class ryuko extends commando.Command {
    constructor(client){
        super(client, {
            name:"ryuko" ,
            group:"animegifs" ,
            memberName: "ryuko" ,
            description: "prints out a gif of Ryuko",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://68.media.tumblr.com/1544a3d3b16564addb6cdcce99077c98/tumblr_of6clii6Yl1v89ei5o1_500.gif");
        break;
      case 1:
        message.channel.sendMessage("http://38.media.tumblr.com/5fc2e506dc17d952c41cd522275f4352/tumblr_nasgbc6KVX1qf2huro1_500.gif");
        break;
      case 2:
        message.channel.sendMessage("http://pa1.narvii.com/6210/fd89d428a52e303967f3bdc4459c222d0770b7ed_hq.gif");
        break;
        

    }
    }
}

module.exports = ryuko;