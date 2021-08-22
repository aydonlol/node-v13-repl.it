// requires
const { Client, Intents } = require('discord.js');
const { TOKEN } = process.env

// initialize client
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

// show bot is logged in
client.on('ready', () => {
	console.log('Logged in as '+client.user.tag);
});

// handle slash commands
client.on('interactionCreate', async i => {
	if (!i.isCommand()) return;
  console.log(i)
})

// handle messages
client.on('messageCreate', message => {
  console.log(`${message.author.tag}: ${message.content}`)
})
// login
client.login(TOKEN);
