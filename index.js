const Discord = require ('discord.js');
require('dotenv').config();
const client = new Discord.Client();

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command', 'event'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})  

client.login(process.env.TOKEN);
//mohi was here