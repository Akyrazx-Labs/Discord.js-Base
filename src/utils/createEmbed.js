import { EmbedBuilder } from 'discord.js';

export default function createEmbed({
    title,
    description,
    color = '#5865f2',
    fields = [],
    footer
}) {
    const embed = new EmbedBuilder()
        .setColor(color);

    if (title) embed.setTitle(title);
    if (description) embed.setDescription(description);
    if (fields.length) embed.addFields(fields);
    if (footer) embed.setFooter({ text: footer });

    return embed;
}
