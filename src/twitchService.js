import axios from 'axios';
import { config } from './config.js';

export async function isStreamLive() {
    try {
        const response = await axios.get(
            `https://api.twitch.tv/helix/streams?user_login=${config.channel}`,
            {
                headers: {
                    'Client-ID': config.clientId,
                    'Authorization': `Bearer ${config.accessToken}`
                }
            }
        );

        const live = response.data.data.length > 0;
        console.log('Stream status:', live ? 'ONLINE' : 'OFFLINE');

        return live;
    } catch (error) {
        console.error(
            'API error:',
            error.response?.status || error.message
        );
        return false;
    }
}