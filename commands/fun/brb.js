//embed info

module.exports = {
    name: "brb",
    aliases: ["brb"],
    description: "Says that you'll be right back!",

//top of embed

    execute(message, args, Discord){
        const embed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
        .setTitle("I'm gonna be right back!")
        .setColor("RANDOM")
        .setTimestamp()

//arguments of command

        if(args[0] === "lunch"){
            embed.addFields(
                { name: 'Paimon is hungry!', value: 'What about some Sticky Honey Roast?' },
            );

        } else if (args[0] === "bath"){
            embed.addFields(
                { name: 'Cleaning yourself is important', value: 'Should we swim in the ocean?' },
            );

        } else if (args[0] === "pray"){
            embed.addFields(
                {name: 'It is time to pray my friends', value: 'Paimon will be blessed as well!'},
            );
            embed.setImage("https://i.imgur.com/vixeTUV.png");

        } else {
            embed.addFields(
                { name: 'Taking a brake is also important!', value: 'Paimon wonders where should we go next? <:nani:805125011957481492> ' },
            );
        }

//end of embed

        message.channel.send(embed);
    }
}