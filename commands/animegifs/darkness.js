const commando = require("discord.js-commando");
class darkness extends commando.Command {
    constructor(client){
        super(client, {
            name:"darkness" ,
            group:"animegifs" ,
            memberName: "darkness" ,
            description: "prints out a gif of Darkness",

        });
    }

    async run(message, args) {
        var max = 3; var min = 0;
    var decider  = Math.floor(Math.random() * (max - min + 1)) + min;
    switch(decider){
      case 0:
        message.channel.sendMessage("https://68.media.tumblr.com/469b5d89b91193c839438a52f03402d3/tumblr_ol34z46d5f1tqsu3ro1_500.gif");
        break;
      case 1:
        message.channel.sendMessage("http://66.media.tumblr.com/59853062cfaa9bf46c5944342839676f/tumblr_o2plf1CzwY1ql717xo1_500.gif");
        break;
      case 2:
        message.channel.sendMessage("https://em.wattpad.com/53ccb4acd177025df4a07d6bce1bf06918feedb2/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f4a6e7242446c4a556534433830413d3d2d3333313439383132312e313438346562653361303261666230613134343738383535373339352e676966?s=fit&w=1280&h=1280");
        break;
      case 3:
         message.channel.sendMessage("https://68.media.tumblr.com/eb54ea63d95311f724349a49fad5ff99/tumblr_okpopcQ1DG1rcufwuo1_r2_500.gif");
        break;
        

    }
    }
}

module.exports = darkness;