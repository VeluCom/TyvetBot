module.exports = {
    name: "hu",
    aliases: ["hu"],
    description: "Fun command inspired on meme made by miHoYo. PS: try `.hu tao`",
    category: "fun",

    execute(message, args, Discord){
        const HuTaoEmbed = new Discord.MessageEmbed()
        .setTitle("Who?")
        .setColor("RED")
        .setTimestamp()
        if(!args[0]){
            HuTaoEmbed.setDescription("Did you write it wrong? Paimon is confused now... <:rly:805124931330768896>");
            return message.channel.send(HuTaoEmbed);
        } else if(args[0] === "tao"){
            HuTaoEmbed.setDescription("Huh, Paimon haven't heard that name before. Are you sure you wrote it right? <:rly:805124931330768896>");
            HuTaoEmbed.setImage('https://i.imgur.com/z2n0phF.png');
            message.channel.send(HuTaoEmbed);
        }
    }
}