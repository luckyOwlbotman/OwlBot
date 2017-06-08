var rp = require('request-promise');
var cheerio = require('cheerio');
const commando = require("discord.js-commando");
////https://github.com/rentzsch/node-google-image-search-url-results/blob/master/index.js -- giveing credit where credit it due
function imageSearch(message, query) {
    var URL = 'http://images.google.com/search?tbm=isch&q='+encodeURIComponent(query);

    return rp(URL)
    .then(function(html) {
        var $ = cheerio.load(html);
        var imgNodes = $('#ires td a img');
        // imgNodes is merely an array-like object, sigh.
        // This is purposedly old-school JS because newer stuff doesn't work:
        var  urls = [];
        imgNodes.map(function(imgNodeIdx) {
            var imgNode = imgNodes[imgNodeIdx];
        urls.push(imgNode);
             message.channel.sendMessage(imgNode.attribs['src']);
        });
        return urls;
    });
}
class search extends commando.Command {
    constructor(client){
        super(client, {
            name:"search" ,
            group:"search" ,
            memberName: "search" ,
            description: "Type ~search then what you want to search to do a google image search",

        }); 
    }
    
    async run(message, args) { 
           imageSearch(message,message.content.slice(7)); 
        //message.channel.sendMessage(urls[0].attribs['src']);
       
    }
}

module.exports = search;
