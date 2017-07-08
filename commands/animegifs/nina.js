const commando = require("discord.js-commando");
class nina extends commando.Command {
    constructor(client){
        super(client, {
            name:"nina" ,
            group:"animegifs" ,
            memberName: "nina" ,
            description: "prints out a gif of Nina",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("http://68.media.tumblr.com/31f8a7ff14bc5a3740ba1159c2f1eeda/tumblr_oo2s57BgHP1sg8uefo2_540.gif");
        break;
      case 1:
        message.channel.sendMessage("https://68.media.tumblr.com/65e621afa24920c9b7b1c552dc6fc38f/tumblr_oo4iq6ZpYz1rm7acxo1_500.gif");
        break;
      case 2:
        message.channel.sendMessage("https://68.media.tumblr.com/b018857c7fddd48d122720e3d493a3af/tumblr_oos4oxYGW31thwuv8o3_540.gif");
        break;
        

    }
    }
}

module.exports = nina;