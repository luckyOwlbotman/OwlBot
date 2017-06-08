const commando = require("discord.js-commando");
const bot = new commando.Client();
bot._commandPrefix = "~"; 
const settings = require("./settings.json");
bot.login(settings.token);
bot.registry.registerGroup("animegifs","animeGifs");
bot.registry.registerGroup("music","Music");
bot.registry.registerGroup("random","Random"); 
bot.registry.registerGroup("search","Google Image Search"); 

bot.registry.registerCommandsIn(__dirname + "/commands")
bot.registry.registerDefaults();

bot.on("ready", () =>{
bot.user.setGame("crippling depression"); 
});







