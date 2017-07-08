const commando = require("discord.js-commando");
const bot = new commando.Client();
bot._commandPrefix = "~"; 
const settings = require("./settings.json");
bot.login(settings.token);
bot.registry.registerGroup("animegifs","animeGifs");
bot.registry.registerGroup("random","Random"); 
bot.registry.registerGroup("miscellaneous","Miscellaneous"); 
bot.registry.registerGroup("reddit","Reddit"); 
bot.registry.registerGroup("search","Google Image Search"); 

bot.registry.registerCommandsIn(__dirname + "/commands")
bot.registry.registerDefaults();

bot.on("ready", () =>{
bot.user.setGame("crippling depression"); 
 
});
bot.on("guildMemberAdd", member =>{
     member.guild.channels.find("name", "logs").sendMessage(" "  + member.user.username + " (id: " +member.user.username +") was added to this server at " + new Date());

});
bot.on("guildMemberRemove", member =>{ 
     member.guild.channels.find("name", "logs").sendMessage(" "  + member.user.username + " (id: " +member.user.username +") left at " + new Date());

});
