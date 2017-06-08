const commando = require("discord.js-commando");
const Discord = require("discord.js");
const YTDL = require("ytdl-core"); 
var servers = {};  

function player(connection, message) {
    var server = servers[message.guild.id];

    server.dispatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));

    

    server.dispatcher.on("end", function() {
        server.queue.shift();
        if (server.queue[0]) player(connection, message);
        else connection.disconnect(); 
    });
}

class playFromYouTube extends commando.Command {
    constructor(client){
        super(client, {
            name:"play" , 
            group:"music" ,
            memberName: "play" ,
            description: "plays audio from YouTube video, to activate this command first type '~play <youTub link>', to see the queue type '~play queue', to skip a song type '~play next' ",

        });
         
    }
    

    async run(message, args) {
            
            if (!message.member.voiceChannel) {
                message.reply("You must be in a voice channel");
                return;
            }
            if(!servers[message.guild.id]) {servers[message.guild.id] = { 
                queue: []  
            };}   
            
            var server = servers[message.guild.id]; 
           if(message.content === "~play queue")
            {
                for(var i =0; i <  server.queue.length; i++){
                     var embed = new Discord.RichEmbed()
                    .setColor("AQUA")
                    .addField("Number " + i + 1, " link: " + server.queue[i] );
                    message.channel.sendEmbed(embed);
                }
                return;
            }
            if(server.dispatcher){
                server.dispatcher.end();
            }  
                

 
             
            server.queue.push(message.content.slice(5));
            
            if (!message.guild.voiceConnection) message.member.voiceChannel.join().then(function(connection) {
                player(connection, message);
            });
     
}
}

module.exports = playFromYouTube; 