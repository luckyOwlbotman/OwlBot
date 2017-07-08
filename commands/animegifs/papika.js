const commando = require("discord.js-commando");
class papika extends commando.Command {
    constructor(client){
        super(client, {
            name:"papika" ,
            group:"animegifs" ,
            memberName: "papika" , 
            description: "prints out a gif of Papika",  

        });
    } 
    
    async run(message, args) {
       var max = 2; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://2.bp.blogspot.com/-PqSriRMZEPE/WBKuK9sd5NI/AAAAAAAApCM/y9PJvq-UGwoiNmD0NUb4-gF54O8ZipHDACPcB/s1600/Omake%2BGif%2BAnime%2B-%2BFlip%2BFlappers%2B-%2BEpisode%2B4%2B-%2BPapika%2BPouts.gif");
        break;
      case 1:
        message.channel.sendMessage("https://68.media.tumblr.com/ed8d473b9e00e9ebdd7a6d2ef3e859c1/tumblr_ofdefp2dmo1v1l4cbo1_500.gif");
        break;
      case 2:
        message.channel.sendMessage("http://pa1.narvii.com/6300/14d0d59611af1236e5a202bac939a87bbdb4b5b5_hq.gif"); 
        break;
        

    }
    }
}

module.exports = papika;