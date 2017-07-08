const commando = require("discord.js-commando");
class satania extends commando.Command {
    constructor(client){
        super(client, {
            name:"satania" ,
            group:"animegifs" ,
            memberName: "satania" ,
            description: "prints out a gif of Satania",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://media.tenor.com/images/80b7ac73436d1be2c7b694753856fef4/tenor.gif");
        break;
      case 1:
        message.channel.sendMessage("https://68.media.tumblr.com/12159461d0265ec4051d0fa6df7cfc3a/tumblr_ojwubs52ji1vaigheo1_500.gif");
        break;
      case 2:
        message.channel.sendMessage("https://68.media.tumblr.com/6b59aad3360fedbe96da38035505f485/tumblr_om1wcxG5qC1u86t2qo1_500.gif");
        break;
        

    }
    }
}

module.exports = satania;