const commando = require("discord.js-commando");
const Discord = require("discord.js");// FOR THE EMBED
class eightball extends commando.Command {
    constructor(client){
        super(client, {
            name:"8ball" ,
            group:"random" ,
            memberName: "8ball" ,
            description: "ask it a question",

        });
    }

    async run(message, args) {
      var max = 5; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
        case 0:
               var embed = new Discord.RichEmbed()
                    .setColor("AQUA")
                    .addField(":question: Question",message.content.slice(7))
                    .addField(":8ball: 8ball","NO - it may cause cancer");
                    
        message.channel.sendEmbed(embed);
        break; 
        case 1:
               var embed = new Discord.RichEmbed()
                    .setColor("AQUA")
                    .addField(":question: Question",message.content.slice(7))
                    .addField(":8ball: 8ball","I don't suggest it");
        
        message.channel.sendEmbed(embed);
        break;
        case 2:
               var embed = new Discord.RichEmbed()
                    .setColor("AQUA")
                    .addField(":question: Question",message.content.slice(7))
                    .addField(":8ball: 8ball","JUST DO IT");

        message.channel.sendEmbed(embed);
        break;
        case 3:
               var embed = new Discord.RichEmbed()
                    .setColor("AQUA")
                    .addField(":question: Question",message.content.slice(7))
                    .addField(":8ball: 8ball","If you want to");
        message.channel.sendEmbed(embed);
        break;
        case 4:
               var embed = new Discord.RichEmbed()
                    .setColor("AQUA")
                    .addField(":question: Question",message.content.slice(7))
                    .addField(":8ball: 8ball","don't hesitate");
       message.channel.sendEmbed(embed);
        break;
        case 5:
               var embed = new Discord.RichEmbed()
                    .setColor("AQUA")
                    .addField(":question: Question",message.content.slice(7))
                    .addField(":8ball: 8ball","If in doubt watch JOJO");
        message.channel.sendEmbed(embed);
        break;
        

    }
            
    }
}

module.exports = eightball;