import { Client, GatewayIntentBits } from 'discord.js';
import config from '../config/config.js';
import loadCommands from './handlers/commandHandler.js';
import loadEvents from './handlers/eventHandler.js';
import createEmbed from './utils/createEmbed.js';

if (!config.token) {
    console.error('❌ DISCORD_TOKEN não foi definido no arquivo .env.');
    process.exit(1);
}

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.config = config;
client.createEmbed = createEmbed;
client.commands = new Map();
client.aliases = new Map();
client.cooldowns = new Map();

await loadCommands(client);
await loadEvents(client);

client.login(config.token);
