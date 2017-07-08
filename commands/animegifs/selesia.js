//selesia
const commando = require("discord.js-commando");
class selesia  extends commando.Command {
    constructor(client){
        super(client, {
            name:"selesia" ,
            group:"animegifs" ,
            memberName: "selesia " ,
            description: "prints out a gif of Selesia",

        });
    }

    async run(message, args) {
        var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://68.media.tumblr.com/6240648ce3af29f55e7e5f28760131a4/tumblr_ootmbrP8KX1vj5j9co1_r1_500.gif");
        break;
      case 1:
        message.channel.sendMessage("http://imgur.com/njnp8PT");
        break;
      case 2:
        message.channel.sendMessage("https://68.media.tumblr.com/52c212685429495ba00c84978fe464e2/tumblr_ooto52Gf5l1t0lt8go2_500.gif");
        break;
        

    }
    }
}

module.exports = selesia;