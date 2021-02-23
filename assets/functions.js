const backpacks = require("../models/backpack.js");

module.exports = {
    getMember: function (message, toFind = '') {
		toFind = toFind.toLowerCase().replace("<@", "").replace(">", "");

		let target = message.guild.members.cache.get(toFind);

		if (!target && message.mentions.members)
			target = message.mentions.members.first();

		if (!target && toFind) {
			target = message.guild.members.cache.find(member => {
				return member.displayName.toLowerCase().includes(toFind) ||
					member.user.tag.toLowerCase().includes(toFind)
			});
		}

		if (!target)
			target = message.member;

        return target;
	},

	findMember: async (message, toFind) => {
		let member;
		if (message.mentions && message.mentions.members.size == 0 && message.mentions.users.size > 0) {
			const toFetch = await message.guild.members.fetch(message.mentions.users.first());
			return toFetch;
		}
		else {
			if (!toFind) return message.member;
			toFind = toFind.toLowerCase();
			member = message.mentions.members.first() || message.guild.members.cache.find((x) => x.user.username.toLowerCase() === toFind) || message.guild.members.cache.get(toFind);
		}
		return member;
	},

	newBP: async (message) => {
		const BP = await backpacks.findOne({ userID: message.author.id });

		if (BP) return BP;

		const newBP = new backpacks({
			userID: message.author.id,
			serverID: [message.guild.id],
			primogem: 100,
			ifate: 5,
			afate: 5,
			gcrystal: 0,
			mora: 500,
			stardust: 0,
			region: ".set region [region]",
			UID: ".set UID [UID]",
			bio: ".set Bio [Bio]",
			Pcharacter: ["Amber", "Kaeya", "Lisa"],
		});
		await newBP.save().catch(err => console.log(err));
		return newBP;
	},
}