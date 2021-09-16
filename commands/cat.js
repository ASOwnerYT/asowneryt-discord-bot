const { SlashCommand } = require('slash-create');
const got = require('got');

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "cat",
            description: "Sends photos of ASOwnerYT's cat!",

            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {
        got('https://www.reddit.com/r/picsofasownerytcat/random/.json')
			.then(response => {
				const [list] = JSON.parse(response.body);
				const [post] = list.data.children;
				const catImage = post.data.url;
				return ctx.sendFollowUp(catImage);
			})
			.catch(console.error);
	}
};
