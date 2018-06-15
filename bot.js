const Discord = require('discord.js');
const client = new Discord.Client();


let prefix = "c!";

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setGame('c!help !')
});

client.on('message', message => {
    
    
    if (message.content.startsWith = prefix){
        
        
         if (message.content === prefix + 'ping') {
    	    message.reply('pong');
       	};
        
        if(message.content === prefix + "info"){
            message.reply("Hello ! I am the official discord bot of the Clouds server nice to meet you !")
        };
        
      
        if(message.content === prefix + ""){};
        
        
    }});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
