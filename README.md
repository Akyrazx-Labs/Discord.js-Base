# Discord.js Base

Uma base simples para criar bots de Discord com **Node.js**, **JavaScript (ES Modules)** e **discord.js**.

## Requisitos

- Node.js 20.18.0 ou superior
- Uma aplicação e um bot criados no [Discord Developer Portal](https://discord.com/developers/applications)

## Instalação

```bash
git clone https://github.com/Akyrazx-Labs/Discord.js-Base.git
cd Discord.js-Base
npm install
```

Crie um arquivo `.env` com base no `.env.example` e coloque o token do seu bot:

```env
DISCORD_TOKEN=seu_token_aqui
PREFIX=!
```

Inicie o bot:

```bash
npm start
```

## Comandos

| Comando | Descrição |
| --- | --- |
| `!ping` | Mostra a latência do bot e da API |
| `!latencia` | Alias de `!ping` |
| `!ms` | Alias de `!ping` |

## Criando comandos

Adicione um arquivo `.js` em `src/commands/prefix/` seguindo este padrão:

```js
export default {
    name: 'exemplo',
    description: 'Descrição do comando',
    category: 'general',
    aliases: [],
    cooldown: 3,

    async execute(message, args, client) {
        await message.reply('Olá!');
    }
};
```

## Estrutura

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

## Segurança

Nunca compartilhe seu token. O arquivo `.env` está no `.gitignore` e não deve ser enviado ao GitHub.

## Licença

Este projeto está sob a licença MIT. Consulte o arquivo `LICENSE`.
