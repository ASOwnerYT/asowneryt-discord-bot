const dotenv = require('dotenv');
const path = require('path');
const { SlashCreator, GatewayServer } = require('slash-create');
const { Client } = require('discord.js');
const { Player } = require('discord-player');
const { registerPlayerEvents } = require('./events');
const { generateDocs } = require('./docs');

dotenv.config();

const client = new Client({
    intents: [
        'GUILDS',
        'GUILD_MESSAGES',
        'GUILD_VOICE_STATES'
    ]
});

client.player = new Player(client);
registerPlayerEvents(client.player);

const creator = new SlashCreator({
  applicationID: process.env.DISCORD_CLIENT_ID,
  token: process.env.DISCORD_CLIENT_TOKEN,
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);

    console.log('Generating docs...');
    generateDocs(creator.commands);
});

// AI chat bot code start
client.on('messageCreate', (message) => {
	if (message.author.bot) return;
	if (message.channel.id === process.env.AI_CHANNEL_ID) {
		const fetch = require('node-fetch').default;

		fetch(`https://api.snowflakedev.org/api/chatbot?message=${encodeURIComponent(message.content)}&name=ASOwnerYT-Robot-Assistant&gender=male&user=${message.author.id}`, {
			headers: {
				'Authorization': process.env.SNOWFLAKE_API_KEY,
			},
		})
			.then(res => res.json())
			.then(data => {
				message.channel.send(data.message);
			})
			.catch(error => console.error(error));
	}
});
// AI chat bot code end

creator
    .withServer(
        new GatewayServer(
            (handler) => client.ws.on('INTERACTION_CREATE', handler)
        )
    )
    .registerCommandsIn(path.join(__dirname, 'commands'));

if (process.env.DISCORD_GUILD_ID) creator.syncCommandsIn(process.env.DISCORD_GUILD_ID);
else creator.syncCommands();

client.login(process.env.DISCORD_CLIENT_TOKEN);

module.exports.client = client;
module.exports.creator = creator;
