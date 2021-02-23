const { getMember } = require ('../../assets/functions.js');
const moment = require ('moment');

//embed info

module.exports = {
    name: "profile",
    aliases: ["profile"],
    description: "Displays your/other traveler's profile!",
    execute(message, args, Discord){

        let member = getMember(message, args.slice(1).join(" ")) || getMember(message, message.author.id); 
            const embed = new Discord.MessageEmbed()

//top of embed

            .setTitle("Here's what Paimon knows about this Traveler <:ohyeah:805124816243130389>")
            .setColor(member.roles.highest.hexColor)
            .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
            .setDescription('Did you know that Paimon is the best guide in Tyvet?')

//everything inside embed

            .addFields(
                {name: "🔸 Traveler's name", value: member.user.username, inline: true},
                {name: "🔸 Traveler's nickname", value: member.user.username, inline: true},
                {name: "🔸 Current server", value: message.guild.name, inline: false},
                {name: "🔸 This traveler joined this server on", value: moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY"), inline: false},
                )
            

//bottom of embed

            .setFooter('Loli bartender cat goes skrrrr')
            .setTimestamp()
            if (member.user.presence.activities[0]){
                for(var i = 0; i<member.user.presence.activities.length; i+=1){
                    if (member.user.presence.activities[i].type === "PLAYING"){
                        embed.addField("🔸 This traveler's currently playing", member.user.presence.activities[i].name, true);
                     } else if (member.user.presence.activities[i].type === "CUSTOM_STATUS"){
                        embed.addField("🔸 That's what this traveler is saying", member.user.presence.activities[i].state, true);
                     }
                }
            }

//end of embed

            message.channel.send(embed);
    }
}