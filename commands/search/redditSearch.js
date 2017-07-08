const commando = require("discord.js-commando");
//var PythonShell = require('python-shell');
//var pyshell = new PythonShell('main.py');
var cheerio = require('cheerio');
var rp = require('request-promise');
var  urls = [];
var store =  {url: "def"};
class rsearch extends commando.Command {
    constructor(client){
        super(client, {
            name:"rsearch" ,
            group:"search" ,
            memberName: "rsearch" ,
            description: "type ~gettop <subbreddit> to get a random post from the hot page of a subreddit",

        });
    }
    
    async run(message, args) {
               if(message.content.slice(9) === ""){
            message.reply("add a tag");
            return;
            }
    var URL = 'http://reddit.com/r/'+encodeURIComponent(message.content.slice(9));
   
     rp(URL)
     .then(function(html) {
   
        var $ = cheerio.load(html);
        var imgNodes = $('a', "div.content");
       

        imgNodes.map(function(imgNodeIdx) {

            var imgNode = imgNodes[imgNodeIdx];
            store = {url: imgNode.attribs['data-href-url']};
            urls[imgNodeIdx] = store;
            if(imgNodeIdx == $("a", "div.content").length -1){
                
                var Str = urls[Math.floor(Math.random() * (imgNodeIdx - 0 + 1)) + 0].url;
                while(typeof Str === 'undefined'){
                    Str = urls[Math.floor(Math.random() * (imgNodeIdx - 0 + 1)) + 0].url; // just a little jank
                }
                if(Str.substring(0, 20) === "/r/Animemes/comments"){
                    Str = "https://reddit.com"+ Str;
                }
                message.channel.sendMessage(Str);
            }
        
        });
         
    })
    .catch(function(err){
            should.throw.error.to.console();
            var respErr  = JSON.parse(err.error);
            var errorResult = {
                origUrl: respErr.origUrl,
                error: respErr
            };
            results.push(errorResult);
        })
        .catch(function(err){
             message.reply("an unknown error has occurred");
        });

    }
}

module.exports = rsearch;