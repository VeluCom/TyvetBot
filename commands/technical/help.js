const fs = require ('fs');
const { LisaGJ } = require("../../assets/emojis.json");

module.exports = {
    name: "help",
    aliases: ["help"],
    description: "This command would help you understand TyvetBot more.",

    execute(message, args, Discord, prefix, client){

        let allCommands = [];
        
        const mainEmbed = new Discord.MessageEmbed()
        .setTitle("Paimon would gladly help you!")
        .setColor("#31F9B5")
        .setDescription("Write `.help <category name>` to see commands that are available for specific category!")
        .addFields(
            { name: ":joy: fun commands :joy:", value: '`' + prefix + 'help fun`', inline: true },
            { name: ":wrench: technical commands :wrench:", value: '`' + prefix + 'help technical`', inline: true },
        )
        .setFooter("Remeber that Paimon is always there for you!", client.user.displayAvatarURL())
        .setTimestamp()


        if (args[0]) {
            //if (args[0]) isn't a category, return the mainEmbed
            if(!fs.readdirSync("./commands/").includes(args[0].toLowerCase())) return message.channel.send(mainEmbed);


            //if the author is looking for a command, .help <category> <command>
            if (args[1]) {

                const commandFile = fs.readdirSync(`./commands/${args[0].toLowerCase()}/`).filter(File => File.endsWith('.js'));

                for (const CMD of commandFile) {
                    const command = require(`../../commands/${args[0].toLowerCase()}/${CMD}`);

                    if (command.name.includes(args[1].toLowerCase()) || command.aliases.includes(args[1].toLowerCase())) {
                        
                        const fileEmbed = new Discord.MessageEmbed()
                        .setTitle(`Lisa is here to help! ${LisaGJ}`)
                        .setColor("#D531F9")
                        .setDescription("That's what I found in one of my books.")
                        .setFooter("See you sonn sweety~", client.user.displayAvatarURL())
                        .setTimestamp()
                        .addField(command.name, command.description);

                        return message.channel.send(fileEmbed);
                    }

                }


            }

            //embed for categories for .help command

            const categoryEmbed = new Discord.MessageEmbed()
            .setTitle("Paimon would gladly help you!")
            .setDescription("Write `.help " + args[0] + " <command name>` to see what it does!")
            .setColor("#31F9B5")
            .setFooter("Let's ask Lisa what she know about these commands!", client.user.displayAvatarURL())
            .setTimestamp();

            const categoryCommands = fs.readdirSync(`./commands/${args[0].toLowerCase()}/`).filter(File => File.endsWith('.js'));

            for (const CMD of categoryCommands) {
                const command = require(`../../commands/${args[0].toLowerCase()}/${CMD}`);
                allCommands.push('`' + command.name + '`');
            }
            categoryEmbed.addField("Available commands:", allCommands.join(", "));

            return message.channel.send(categoryEmbed);
        }
        
        return message.channel.send(mainEmbed);
    }
}