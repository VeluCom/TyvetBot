module.exports = {
    name: "raksuo",
    aliases: ["raksuo", "yasuomeme"],
    description: "Yasuo, you bad bad character, no dinner for you tonight!",
    category: "fun",

    execute(message, Discord){
        const attachment = new Discord.MessageAttachment('https://i.imgur.com/8rVUuWm.png');
        message.channel.send(attachment);
    }
}