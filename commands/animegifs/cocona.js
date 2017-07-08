const commando = require("discord.js-commando");
class cocona extends commando.Command {
    constructor(client){
        super(client, {
            name:"cocona" ,
            group:"animegifs" ,
            memberName: "cocona" ,
            description: "sends a gif of Cocona",

        }); 
    }
    
    async run(message, args) {
       var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("http://68.media.tumblr.com/a6d952436f2ff23d1dfd70ce1d8bd472/tumblr_oggeuk1qHO1qcsnnso1_500.gif"); 
        break;
      case 1:
        message.channel.sendMessage("http://pa1.narvii.com/6391/356e79f59100ea213fe70fb15d14075cc6dd183e_hq.gif");
        break;
      case 2:
        message.channel.sendMessage("http://pa1.narvii.com/6405/72f3a04d48672718cd79d5d793992a51a2c197ae_hq.gif"); 
        break;
        

    }
    }
}

module.exports = cocona;