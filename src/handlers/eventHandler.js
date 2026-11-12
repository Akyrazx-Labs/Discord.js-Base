import { readdir } from 'node:fs/promises';

export default async function loadEvents(client) {
    const eventsPath = new URL('../events/', import.meta.url);
    const files = await readdir(eventsPath);

    for (const file of files) {
        if (!file.endsWith('.js')) continue;

        const { default: event } = await import(new URL(file, eventsPath).href);

        if (!event?.name || typeof event.execute !== 'function') {
            console.warn(`⚠️ Evento ignorado: ${file}`);
            continue;
        }

        const handler = (...args) => event.execute(...args, client);

        if (event.once) {
            client.once(event.name, handler);
        } else {
            client.on(event.name, handler);
        }
    }

    console.log(`🔔 Eventos carregados.`);
}
