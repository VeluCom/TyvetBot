module.exports = {
    name: "masterpiece",
    aliases: ["masterpeice", "paintingmeme", "albedomeme"],
    description: "Let Albedo paints you on his painting! *It must be great feeling*",

    execute: async (Canvas, Discord, message) => {

        const canvas = Canvas.createCanvas(740, 1110);
        const ctx = canvas.getContext('2d');

        const userImage = await Canvas.loadImage(message.author.displayAvatarURL({format: 'png', dynamic: false}));
        ctx.drawImage(userImage, 85, 519, 607, 590);
        const background = await Canvas.loadImage('https://i.imgur.com/KZx2o2M.png');
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        const attachment = new Discord.MessageAttachment(canvas.toBuffer(), "masterpice.png");

        message.channel.send(attachment);
    }
}