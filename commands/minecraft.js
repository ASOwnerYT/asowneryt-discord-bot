const { SlashCommand } = require('slash-create');
const Discord = require('discord.js');

module.exports = class extends SlashCommand {
	constructor(creator) {
		super(creator, {
			name: 'minecraft',
			description: 'Join the Minecraft SMP!',

			guildIDs: process.env.DISCORD_GUILD_ID ? [process.env.DISCORD_GUILD_ID] : undefined,
		});
	}

	async run(ctx) {
		const embed = new Discord.MessageEmbed()
			.setAuthor('Welcome')
			.setTitle('First, read the following and click the agree button if you agree.')
			.setColor('#00AA00')
			.addFields(
				{ name: 'Rule #1', value: 'No griefing/stealing' },
				{ name: 'Rule #2', value: 'No hacking/cheating' },
				{ name: 'Rule #3', value: 'Dont be toxic or send NSFW content' },
				{ name: 'Rule #4', value: 'The owner of the server, ASOwnerYT, has the final say. Don\'t argue or attempt to find loopholes in the rules.' },
			)
			.addFooter('Bot created by ASOwnerYT')
			.addTimestamp();

		ctx.sendFollowUp({ embeds: [embed] });
	}
};
