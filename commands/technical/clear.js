//commands info

module.exports = {
    name: "clear",
    aliases: ["clear"],
    description: 'Clears specific ammount of commands. Just write `.clear <ammount of messages>`',
    category: "technical",

//commands

    execute(message, args, Discord){

        const clearEmbed = new Discord.MessageEmbed()
        .setTitle("Did anyone said cleaning?")
        .setColor("NAVY")
        .setTimestamp()
        
        if(!args[0]){
            clearEmbed.setDescription("Paimon doesn't know how many messages to clear <:rly:805124931330768896>");
            return message.channel.send(clearEmbed);

        } else if(args[0] < 0){
            clearEmbed.setDescription("Paimon can't delete negative ammount of messages!");
            return message.channel.send(clearEmbed);

        } else if(args[0] > 100 || isNaN(args[0])){
            clearEmbed.setDescription("Hey, Paimon would be out of brain juice if she did that!");
            return message.channel.send(clearEmbed);

        } else if(args[0] > 0){
            clearEmbed.setDescription('Paimon deleted `' + args[0] + '` messages! <:proud:805125107709640724>');
            message.channel.bulkDelete(args[0]);
            message.channel.send(clearEmbed);
        }
    }
}