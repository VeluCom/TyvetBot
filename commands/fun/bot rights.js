module.exports = {
    name: "botrights",
    aliases: ["botrights", "br"],
    description: "Every bot should have it's rights! Paimon would fight for them!",

    execute(message, Discord){
        const embed = new Discord.MessageEmbed()
        .setTitle("#BOTRIGHTS")
        .setColor("RANDOM")
        .setDescription("Paimon also have her own rights, you know! <:mucho:805125189499093033>")
        .setTimestamp()
        message.channel.send(embed);
    }
}