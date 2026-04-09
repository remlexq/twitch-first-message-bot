import 'dotenv/config';

export const config = {
    channel: process.env.CHANNEL,
    username: process.env.TWITCH_USERNAME,
    oauth: process.env.TWITCH_OAUTH,
    clientId: process.env.CLIENT_ID,
    accessToken: process.env.APP_ACCESS_TOKEN,
    checkInterval: 2000 // Check if the stream is live every 2 seconds 
};
