# Discord.js Base

A lightweight starter for Discord bots built with [discord.js](https://discord.js.org/) v14.

The project uses JavaScript ES modules and a small file-based structure. It currently includes a prefix command handler, event loader and a ping command.

## Requirements

- Node.js 20.18.0 or newer
- A Discord application with a bot created in the [Developer Portal](https://discord.com/developers/applications)

## Setup

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Akyrazx-Labs/Discord.js-Base.git
cd Discord.js-Base
npm install
```

Create a `.env` file in the project root:

```env
DISCORD_TOKEN=your_bot_token
PREFIX=!
```

Start the bot:

```bash
npm start
```

For development, you can use:

```bash
npm run dev
```

## Commands

| Command | Description |
| --- | --- |
| `!ping` | Displays the bot and Discord API latency |
| `!latencia` | Alias for `!ping` |
| `!ms` | Alias for `!ping` |

## Adding a command

Create a JavaScript file inside `src/commands/prefix/`. Commands use the following structure:

```js
export default {
    name: 'example',
    description: 'Command description',
    category: 'general',
    aliases: [],
    cooldown: 3,

    async execute(message, args, client) {
        await message.reply('It works!');
    }
};
```

## Project structure

```text
src/
├── commands/
│   └── prefix/
├── events/
├── handlers/
├── utils/
└── index.js
config/
└── config.js
.env.example
.gitignore
package.json
```

## Notes

The bot uses the `MessageContent` intent to read prefix commands. Enable **Message Content Intent** in the Bot section of your application in the Discord Developer Portal.

Keep your bot token private. Do not commit your `.env` file.

## License

MIT
