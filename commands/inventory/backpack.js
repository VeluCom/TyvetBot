const backpacks = require("../../models/backpack.js");
const { newBP } = require("../../assets/functions.js");
const { PaimonProud} = require("../../assets/emojis.json");

module.exports = {
    name: "backpack",
    aliases: ["backpack", "bp"],
    description: "This command is under development...",

    execute: async (message, Discord, Canvas, prefix) => {

        const profileData = await newBP(message);
        try {
      
        const canvas = Canvas.createCanvas(633, 381);
        const ctx = canvas.getContext('2d');

        const namecard = await Canvas.loadImage('https://i.imgur.com/ibmgHh4.png');
        ctx.drawImage(namecard, 16, 1, 289, 115);

        const background = await Canvas.loadImage('https://i.imgur.com/tIyXb36.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

//profile info
        ctx.font = 'bold 18px Verdana';
        ctx.fillStyle = '#626B97';
        ctx.textAlign = 'center';
        ctx.fillText(message.author.username, 315 / 2, 160);
        ctx.font = 'bold 12px Verdana';
        ctx.textAlign = 'start';
        ctx.fillText(profileData.region, 91, 265);
        ctx.fillText(profileData.UID, 70, 287);
        ctx.fillText(profileData.bio, 65, 310);

//currencies
        ctx.font = 'bold 12px Arial'
        ctx.textAlign = 'center';
        ctx.fillText(profileData.primogem, 361.5, 93);
        ctx.fillText(profileData.ifate, 361.5, 157);
        ctx.fillText(profileData.afate, 361.5, 228);
        ctx.fillText(profileData.gcrystal, 444.5, 93);
        ctx.fillText(profileData.mora, 444.5, 157);
        ctx.fillText(profileData.stardust, 444.5, 228);

//number of characters
        ctx.fillText(profileData.Gcharacter.length, 557, 130);
        ctx.fillText(profileData.Pcharacter.length, 557, 233);

        ctx.beginPath();
	    ctx.arc(156.8, 90, 38.5, 0, Math.PI * 2, true);
	    ctx.closePath();
	    ctx.clip();
        const avatar = await Canvas.loadImage(message.author.displayAvatarURL({format: 'jpg'}));
        ctx.drawImage(avatar, 107, 46, 101, 101);
        
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "backpack.png");

        message.channel.send(attachment);
        } catch(err) {
            console.log(err);
        }
    }
}