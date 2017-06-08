const commando = require("discord.js-commando");
class miia extends commando.Command {
    constructor(client){
        super(client, {
            name:"miia" ,
            group:"animegifs" ,
            memberName: "miia" ,
            description: "prints out a gif of Miia",

        });
    }

    async run(message, args) {
        var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://media.tenor.com/images/af4b46b85ae176e4b8fdb8f25baf3a73/tenor.gif");
        break;
      case 1:
        message.channel.sendMessage("https://i.redd.it/ok45gxjkvy3y.gif");
        break;
      case 2:
        message.channel.sendMessage("https://media.tenor.com/images/adbcfddc1c9d1e744933e50446468710/tenor.gif");
        break;
        

    }
    }
}

module.exports = miia;