const Discord = require('discord.js');
const client = new Discord.Client();
const ytdl = require("ytdl-core");

let prefix = "c!";

client.on('ready', () => {
    console.log('I am ready!');
	client.user.setGame("use c!help !");
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
		message.channel.send("processing request");
			if(!message.member.voiceChannel){return message.channel.send("please connect to a voice channel")};
		
			if(message.guild.me.voiceChannel){return message.channel.send("Sorry the bot is already connected to the guild.")};
		
			if(!args[0]){return message.channel.send("Sorry, please input a url following the command")};
		
			let validate = ytdl.validateURL(args[0]);
		
			if(!validate){return message.channel.send("sorry please put a **valid** url following the comman")};
			
			let info = ydtl.getInfo(args[0]);
		
			let connection = message.member.voiceChannel.join();
		
			let dispatcher = connection.play(ytdl(args[0], {filter: "audioonly"}));
		
		message.channel.send("Now playing: ${info.title}");
	};
        
        
    }});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
