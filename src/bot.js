import tmi from 'tmi.js';
import { config } from './config.js';
import { isStreamLive } from './twitchService.js';

const client = new tmi.Client({
    identity: {
        username: config.username,
        password: config.oauth
    },
    channels: [config.channel]
});

let wasLive = false;
let checkInterval;


async function checkStream() {
    const live = await isStreamLive();

    if (live && !wasLive) {
        wasLive = true;
        
        try {
            await client.say(config.channel, 'Ку'); // Message to send when the stream goes live
            console.log('Message sent! Task completed.');

            if (checkInterval) {
                clearInterval(checkInterval);
                console.log('The check timer has stopped.');
            }

            setTimeout(() => {
                console.log('Shutting down the bot.');
                client.disconnect();
                process.exit(0); 
            }, 2000);

            
        } 

        catch (error) {
            console.error('Error while sending the message:', error);
        }
    }

    if (!live && wasLive) {
        wasLive = false;
    }
}



async function startBot() {
    try {
        await client.connect();
        console.log('The bot is connected to the chat'); 


        client.on('join', (channel, username, self) => {
            if (self) {
                console.log('The bot has joined the chat and is ready');
            }
        });

        checkStream();
        setInterval(checkStream, config.checkInterval);

    } catch (error) {
        console.error('Startup error:', error.message);
    }
}

startBot();