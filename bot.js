const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");

const streamOptions = { seek: 0, volume: 1 };

let prefix = "c!";

client.on('ready', () => {
    console.log('I am ready!');
    client.user.setPresence({ status: 'online', game: { name: 'use c!help' } });
});

client.on('message', message => {    
    
    if (message.content.startsWith(prefix)){
        let args = message.content.slice(prefix.length).trim().split("c!");
        
         if (message.content === prefix + 'ping') {
    	    message.reply('pong');
       	};
        
        if(message.content === prefix + "info"){
            message.reply("Hello ! I am the official discord bot of the Clouds server nice to meet you !");
        };
        
      
        if(message.content.startsWith(prefix + "play")){
		console.log("recieved");
			if(!message.member.voiceChannel){return message.channel.send("please connect to a voice channel")};
		
			if(message.guild.me.voiceChannel){return message.channel.send("Sorry the bot is already connected to the guild.")};
		
			if(!args[0]){return message.channel.send("Sorry, please input a url following the command")};
		
			let validate = ytdl.validateURL(args[0]);
		
			if(!validate){return message.channel.send("sorry please put a **valid** url following the command")};
					
			let channel = message.member.voiceChannel
			
			let stream = ytdl(args[0], {filter: "audioonly"});
		
    			channel.join()
   			.then(connection => {const dispatcher = connection.playStream(stream, streamOptions);})
			
			var info = ytdl.getInfo(args[0]);
	
		
			console.log(info);
		
			message.channel.send('Now playing: ' + info.title);
	};
	
	if(message.content === prefix + "disconnect"){client.voiceConnections.get(message.guild.id).disconnect();}
	    
        
        
    }});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
