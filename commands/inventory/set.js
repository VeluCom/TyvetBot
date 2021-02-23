const backpacks = require("../../models/backpack.js");
const { newBP } = require("../../assets/functions.js");

module.exports = {
    name: "set",
    aliases: "set",
    description: "This command would let you set your region / UID / bio for `.backpack`.",

    execute: async (message, args, Discord) => {

        const profileData = await newBP(message);

//main error embed for only writing .set

        if (!args[0]) {
            const noAr1 = new Discord.MessageEmbed()
            .setColor("RED")
            .setTitle("Not enough informations!")
            .setDescription("Please specify what you're trying to set! Available args: region / UID / bio.")
            message.channel.send(noAr1);
        };

//code for .set region

        if (args[0] === 'region'){
            const regionE = new Discord.MessageEmbed()
            regionE.setTitle("Let's set a region for you!")
            .setColor("#FEFC96")

            if (args[1] === "Europe" || args[1] === "europe" || args[1] === "EU" || args[1] === "eu"){
                regionE.setDescription("Succesfully changed region to Europe.")
                profileData.region = "Europe";
                profileData.save().catch(e => console.log(e));
                return message.channel.send(regionE);

            } else if (args[1] === "America" || args[1] === "america"){
                regionE.setDescription("Succesfully changed region to America.")
                profileData.region = "America";
                profileData.save().catch(e => console.log(e));
                return message.channel.send(regionE);

            } else if (args[1] === "Asia" || args[1] === "asia"){
                regionE.setDescription("Succesfully changed region to Asia.")
                profileData.region = "Asia";
                profileData.save().catch(e => console.log(e));
                return message.channel.send(regionE);

            } else if (args[1] === "SAR" || args[1] === "sar"){
                regionE.setDescription("succesfully changed region to SAR.")
                profileData.region = "SAR";
                profileData.save().catch(e => console.log(e));
                return message.channel.send(regionE);
            }

            const regionS = new Discord.MessageEmbed()
            regionS.setTitle("Let's set a region for you!")
            .setColor("#FEFC96")
            .setDescription("Please provide what region you want to choose. Available regions: Europe / America / Asia / SAR.")
            return message.channel.send(regionS);
        }

//code for .set uid

        if(args[0] === "UID" || args[0] === "uid" || args[0] === "id" || args[0] === "ID"){
            const goodUID = new Discord.MessageEmbed()

            if(!args[1] || isNaN(args[1]) || args[1].length < 7 || args[1].length > 12){
                const badUID = new Discord.MessageEmbed()
                badUID.setTitle("Wrong informations!")
                .setColor("RED")
                .setDescription("Paimon can't set your UID if there's any or isn't a number which is 7 to 12 numbers long!")
                return message.channel.send(badUID);
            }

            goodUID.setTitle("Changin UID")
            .setColor("#FEFC96")
            .setDescription(`Succsefully set your UID to ${args[1]}!`)
            profileData.UID = args[1];
            profileData.save().catch(e => console.log(e));
            return message.channel.send(goodUID);
        }

//code for .set bio

        if(args[0] === "Bio" || args[0] === "bio" || args[0] === "Status" || args[0] === "status"){
            const goodBio = new Discord.MessageEmbed()

            if(!args[1] || args[1].length > 23){
                const badBio = new Discord.MessageEmbed()
                badBio.setTitle("Changing Bio")
                .setColor("RED")
                .setDescription("Paimon doesn't know what bio you want to set or is too long! Only 23 symbols can be set for Bio.")
                return message.channel.send(badBio);
            }
            
            goodBio.setTitle("Changing Bio")
            .setColor("#FEFC96")
            .setDescription(`Succesfully changed your bio to ${args.slice(1).join(" ")}`)
            profileData.bio = args.slice(1).join(" ");
            profileData.save().catch(e => consol.log(e));
            return message.channel.send(goodBio);
        }
    }
}