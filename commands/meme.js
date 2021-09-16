const { SlashCommand } = require('slash-create');
const { MessageEmbed } = require('discord.js');
const got = require('got');

module.exports = class extends SlashCommand {
    constructor(creator) {
        super(creator, {
            name: "meme",
            description: "sends epic memes",

            guildIDs: process.env.DISCORD_GUILD_ID ? [ process.env.DISCORD_GUILD_ID ] : undefined
        });
    }

    async run (ctx) {
        got('https://www.reddit.com/r/memes/random/.json')
			.then(response => {
				const [list] = JSON.parse(response.body);
				const [post] = list.data.children;

				const permalink = post.data.permalink;
				const memeUrl = `https://reddit.com${permalink}`;
				const memeImage = post.data.url;
				const memeTitle = post.data.title;
				const memeUpvotes = post.data.ups;
				const memeNumComments = post.data.num_comments;

				const embed = new MessageEmbed();
				embed.setTitle(`${memeTitle}`);
				embed.setURL(`${memeUrl}`);
				embed.setColor('RANDOM');
				embed.setImage(memeImage);
				embed.setFooter(`👍 ${memeUpvotes} 💬 ${memeNumComments}`);

				return ctx.sendFollowUp({ embeds: [embed] });
			})
			.catch(console.error);
    }
}
