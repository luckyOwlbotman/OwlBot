const commando = require("discord.js-commando");
var cheerio = require('cheerio');
var rp = require('request-promise');
var  urls = [];
var store =  {url: "def"};
class imgurSearch extends commando.Command {
    constructor(client){
        super(client, {
            name:"isearch" ,
            group:"search" , 
            memberName: "isearch" ,
            description: "type ~isearch <what you want to search> to get a search result from imgur",

        }); 
    }
    
    async run(message, args) {
        if(message.content.slice(8) === ""){
            message.reply("add a tag");
            return;
        }
   var URL = 'http://imgur.com/search?q='+encodeURIComponent(message.content.slice(8).replace(/ /g, " + "));
     rp(URL).then(function(html) {
        var $ = cheerio.load(html);
        var imgNodes = $('img');
        
        imgNodes.map(function(imgNodeIdx) {
            var imgNode = imgNodes[imgNodeIdx];
            store = {url: "https://" +(imgNode.attribs['src'].slice(2).slice(0, imgNode.attribs['src'].length -7))};
            urls[imgNodeIdx] = store;
            if(imgNodeIdx == $("img").length -1){
                message.channel.sendMessage(urls[Math.floor(Math.random() * (imgNodeIdx- 0 + 1)) + 0].url);
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


module.exports = imgurSearch;





