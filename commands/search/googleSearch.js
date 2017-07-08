var rp = require('request-promise');
var cheerio = require('cheerio');
const commando = require("discord.js-commando");
var  urls = [];
var store =  {url: "def"};
class search extends commando.Command {
    constructor(client){
        super(client, {
            name:"gsearch" ,
            group:"search" ,
            memberName: "search" ,
            description: "type ~gsearch <what you want to search> to get a search result from google",

        }); 
    }
    
    async run(message, args) { 
         if(message.content.slice(8) === ""){
            message.reply("add a tag");
            return;
            }
    var URL = 'http://images.google.com/search?tbm=isch&q='+encodeURIComponent(message.content.slice(8).replace(/ /g, " + "));
     rp(URL).then(function(html) {
        var $ = cheerio.load(html);
        var imgNodes = $('#ires td a img');
        
        imgNodes.map(function(imgNodeIdx) {
            var imgNode = imgNodes[imgNodeIdx];
            store = {url: imgNode.attribs['src']};
            urls[imgNodeIdx] = store;
            if(imgNodeIdx == $("#ires td a img").length -1){
                message.channel.sendMessage(urls[Math.floor(Math.random() * (imgNodeIdx + 1)) + 0].url);
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

module.exports = search;
