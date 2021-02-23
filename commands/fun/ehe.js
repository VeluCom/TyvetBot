const { Channel } = require("discord.js")

module.exports = {
    name: "ehe",
    aliases: ["ehe"],
    description: "Ehe te nandayo?!",
    category: "fun",

    execute(message, Discord){
        const embed = new Discord.MessageEmbed()
        .setImage("https://imgur.com/Mymb80y.gif")
        .setColor("LUMINOUS_VIVID_PINK")
        .setTimestamp()
        message.channel.send(embed);
    }
}