const commando = require("discord.js-commando");
class galko extends commando.Command {
    constructor(client){
        super(client, {
            name:"galko" ,
            group:"animegifs" ,
            memberName: "galko" ,
            description: "prints out a gif of Galko",

        });
    }
    
    async run(message, args) {
         var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://media.giphy.com/media/gysoOKvQuuQNy/giphy.gif");
        break;
      case 1:
        message.channel.sendMessage("https://4.bp.blogspot.com/-ba93-1ksBfw/Vr5ePYkfV8I/AAAAAAAAXvg/LcUJp6FzYfI/s1600/Omake%2BGif%2BAnime%2B-%2BOshiete%2521%2BGalko-chan%2B-%2BEpisode%2B6%2B-%2BGalko%2BFunny%2BFaces.gif");
        break;
      case 2:
        message.channel.sendMessage("https://2.bp.blogspot.com/-npQ7jdGjYNI/VsfOAN8SaAI/AAAAAAAAYF4/l0JcSgp2QRE/s1600/Omake%2BGif%2BAnime%2B-%2BOshiete%2521%2BGalko-chan%2B-%2BEpisode%2B7%2B-%2BGalko%2BBikini.gif");
        break;
        

    }
    }
}

module.exports = galko;