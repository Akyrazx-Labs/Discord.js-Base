import 'dotenv/config';

export default {
    token: process.env.DISCORD_TOKEN,
    prefix: process.env.PREFIX || '!',
    successColor: '#57f287',
    errorColor: '#ed4245'
};
