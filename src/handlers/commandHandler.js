import { readdir } from 'node:fs/promises';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';

export default async function loadCommands(client) {
    const commandsPath = new URL('../commands/prefix/', import.meta.url);
    const files = await readdir(commandsPath);

    for (const file of files) {
        if (!file.endsWith('.js')) continue;

        const fileUrl = new URL(file, commandsPath);
        const { default: command } = await import(fileUrl.href);

        if (!command?.name || typeof command.execute !== 'function') {
            console.warn(`⚠️ Comando ignorado: ${file}`);
            continue;
        }

        client.commands.set(command.name, command);

        for (const alias of command.aliases ?? []) {
            client.aliases.set(alias, command.name);
        }
    }

    console.log(`📦 ${client.commands.size} comando(s) carregado(s).`);
}
