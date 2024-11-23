# DiscordJS
[https://discordjs.guide/](https://discordjs.guide/)

DiscordJS
---------

A js library to help creating discord.js

Creating a discord application and bot
--------------------------------------

Head to to the discord developer portal, sign in and create an app

then create a bot. Then get the bot's token

### Inviting the bot to server. 

Go to the developer portal, in your discord app. Go to OAuth2 tab and go to the url generator. Click bot then click the bot permissions. The url will be on the page

Installation And setup
----------------------

Start with a node project then install discord.js

```text-plain
npm install discord.js
```

Then save the bot's token to an .env

The boiler plate
----------------

This the barebones of creating a live bot. Then just run the script the bot will be up.

```text-plain
// Require the necessary discord.js classes
const { Client, GatewayIntentBits } = require('discord.js');
const { token } = require('./config.json'); // note you can use dot env for this.

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

// When the client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
```

* * *

*   General
*   lingo
    *   server is guild 
*   Creating the discord bot app and bot from the developer portal
*   setup dev
    *   npm init
    *   npm install discord.js
    *   boiler plate
        *   why intents and why just ignore?
*   creating a slash command
    *   npm install command package
    *   setup more dotenv
    *   boiler plate of creating a command
    *   listening for a command
    *   deleting slash commands