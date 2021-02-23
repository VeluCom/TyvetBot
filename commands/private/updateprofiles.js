const backpacks = require("../../models/backpack.js");

module.exports = {
    name: "update",
    aliases: "update",
    description: "Zaktualizuj dane w profilach w DataBase.",

    execute: async (message, Discord, Dziadek) => {

        if(!Dziadek) return;
        await backpacks.updateMany({}, {
           $set:
           {
               Pcharacter: ["Amber", "Kaeya", "Lisa"]
           }
         }).catch(e => console.log(e));
         
        const update = new Discord.MessageEmbed()
        .setTitle("Aktualizowanie profilów...")
        .setColor("#F396FE")
        .setDescription("Właśnie zaktualizowałeś profile użytkowników! GG bro xDDD")
        message.channel.send(update);
    }
}