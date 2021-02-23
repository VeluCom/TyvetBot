const { Collection } = require('discord.js');
const fs = require('fs');

module.exports = (client, Discord) =>{

    client.commands = new Collection();

    const categories = fs.readdirSync('./commands/');

    for (const category of categories) {
    const commandFiles = fs.readdirSync(`./commands/${category}/`).filter(file => file.endsWith('.js'));
    
        for(const file of commandFiles){
            const command = require(`../commands/${category}/${file}`);
        
            client.commands.set(command.name, command);
        }
    }
};