// uses danbooru to search for picss
const commando = require("discord.js-commando");
const Danbooru = require('danbooru');
const settings = require("../../settings.json");
class NSFW extends commando.Command {
    constructor(client){
        super(client, {
            name:"nsfwsearch" ,
            group:"search" ,
            memberName: "nsfwsearch" ,
            description: "type ~nsfwsearch <tag> to get pictures from danbooru, must be in NSFW channal",

        }); 
    }
    
    async run(message, args) {
        if(message.channel.nsfw === false){
            message.reply("You must be in NSFW channel");
            return;
        }
        if(message.content.slice(12) === ""){
            message.reply("add a tag");
            return;
        }
        let booru = new Danbooru({
         login: settings.login,
         api_key: settings.api_key,
          base: 'http://sonohara.donmai.us'
        })
        let postArray = await booru.posts({
          limit: 100,
           page: 1,
          tags: message.content.slice(12).split(" "),
          random: true    
        }) 
        let post = postArray[0];  
        message.channel.sendMessage("https://danbooru.donmai.us/posts/"+ post.id);
    }
}

module.exports = NSFW;































































/*   if(message.channel.nsfw === false){
            message.reply("You must be in NSFW channel");
        }
          fs.appendFileSync("nsfwdata.txt", "loli", (err) => {
  if (err) throw err;
});
        PythonShell.run('NSFW.py', function (err, results) { // calls pyton file nsfw
  if (err) throw err; 
    //message.channel.sendMessage("https://danbooru.donmai.us/posts/" +results);
    message.channel.sendMessage(results[0]);
        message.channel.sendMessage(results[1]);

  fs.unlinkSync("nsfwdata.txt"); // deletes the txt file that was created 

        });
       

     
   //  fs.unlinkSync("nsfwdata.txt");  */ 
  // let booru = new Danbooru({
 // login: 'login',
//  api_key: 'api_key',
 // base: 'http://sonohara.donmai.us'
//})