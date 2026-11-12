export default {
    name: 'messageCreate',

    async execute(message, client) {
        if (message.author.bot || !message.guild) return;

        const prefix = client.config.prefix;
        if (!message.content.startsWith(prefix)) return;

        const args = message.content.slice(prefix.length).trim().split(/\s+/);
        const commandName = args.shift()?.toLowerCase();
        if (!commandName) return;

        const resolvedName = client.aliases.get(commandName) ?? commandName;
        const command = client.commands.get(resolvedName);
        if (!command) return;

        const cooldown = command.cooldown ?? 0;
        const key = `${command.name}:${message.author.id}`;
        const now = Date.now();
        const expiresAt = client.cooldowns.get(key) ?? 0;

        if (expiresAt > now) {
            const seconds = Math.ceil((expiresAt - now) / 1000);
            return message.reply(`⏳ Aguarde ${seconds}s para usar esse comando novamente.`);
        }

        if (cooldown > 0) {
            client.cooldowns.set(key, now + cooldown * 1000);
        }

        try {
            await command.execute(message, args, client);
        } catch (error) {
            console.error(`Erro no comando ${command.name}:`, error);
            await message.reply('❌ Ocorreu um erro ao executar esse comando.');
        }
    }
};
