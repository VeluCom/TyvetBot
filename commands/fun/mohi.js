module.exports = {
    name: "mohi",
    aliases: ["mohi"],
    description: "Mohi - praising command for helping me with making bot.",

    execute(message, Discord){
        const embed = new Discord.MessageEmbed()
        .setTitle("Mohiii")
        .setColor("GOLD")
        .setDescription("Paimon's mentor and sensei. This command is dedicated for you! :heart:")
        .setTimestamp()
        message.channel.send(embed);
    }
}