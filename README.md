# Twitch Live Notification Bot

A Node.js bot that monitors a Twitch channel and instantly sends a message when the stream starts.

## Features

* **Fast polling:** Checks stream status every 2 seconds
* **Instant reaction:** Sends the message within milliseconds of the stream going live.
* **One-shot execution:** Automatically disconnects and stops the process after successfully sending the message to save system resources.
* **Secure:** Uses environment variables to keep your tokens safe.

## Tech Stack

* Node.js
* [tmi.js](https://tmijs.com/) (Twitch Messaging Interface)
* Axios (For Twitch API requests)

## Setup & Installation

1. **Clone the repository:**
```bash
   git clone <your-repo-url>
   cd <your-repo-folder>
   ```
   
2. **Install dependencies:**
   Use your preferred package manager:
   ```bash
   npm install tmi.js axios dotenv
   ```
   
3. **Configure the environment:**
    * Rename .env.example to .env.
    * Open the .env file and fill in your details:
        * CHANNEL: The streamer's channel you want to monitor.
        * TWITCH_USERNAME: Your bot's/account's Twitch username.
        * TWITCH_OAUTH: Get your chat token from [Twitch Token Generator](https://twitchtokengenerator.com/) **Crucial:** Make sure to click "Bot Chat Token" or manually ensure the token has permissions to read and send messages in chat.
        * CLIENT_ID & APP_ACCESS_TOKEN: Register an app on the [Twitch Developer Portal](https://dev.twitch.tv/console) to get these API credentials. You must generate this token via your terminal using your `CLIENT_ID` and `Client Secret`. Run the following command:
        ```bash
       curl -X POST "https://id.twitch.tv/oauth2/token?client_id=YOUR_CLIENT_ID&client_secret=YOUR_CLIENT_SECRET&grant_type=client_credentials"
       ```
        Copy the `access_token` from the JSON response and paste it into your `.env` file.

**Run the bot:**
```bash
   node bot.js
   ```

## Custom Message

To change the message that the bot sends when the stream starts, open:

`src/bot.js`

Find this block of code:

```javascript
await client.say(config.channel, 'ENTER YOUR MESSAGE HERE')
```

Replace `'ENTER YOUR MESSAGE HERE'` with your own message, for example:

```javascript
client.say(config.channel, 'I am first!')
```

## Disclaimer

Please use this bot responsibly. Sending repetitive automated messages exactly at the start of every stream might be considered spam by channel moderators and could lead to a ban in that specific chat.
