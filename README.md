# ASOwnerYT's Discord Bot

insert short description here

## Features

### Highlights

* Simple & easy to use 🤘
* Audio filters (bassboost) 🎸
* YouTube, Facebook and Vimeo support 🌌
* Slash Commands support 🤖
* Play in multiple servers at the same time 🚗

### Commands

Here are all the available commands in the bot!

|      Name      |             Description             |  Options  |
|:---------------|:-----------------------------------:|----------:|
|   **/back**    |      Plays the previous track       |           |
| **/bassboost** |      Toggles bassboost filter       |           |
|    **/cat**    |  Sends photos of ASOwnerYT's cat!   |           |
|   **/clear**   |      Clear the current queue.       |           |
|   **/jump**    |      Jumps to a specific track      | \<tracks> |
|   **/loop**    |           Sets loop mode            |  \<mode>  |
|   **/meme**    |          sends epic memes           |           |
|    **/np**     |  See what's currently being played  |           |
|   **/pause**   |       Pause the current song        |           |
|   **/play**    |      Plays a song from youtube      | \<query>  |
| **/playnext**  | Adds a song to the top of the queue | \<query>  |
|   **/queue**   |            See the queue            |  \<page>  |
|  **/remove**   |       Remove a specific track       | \<track>  |
|  **/resume**   |       Resume the current song       |           |
|   **/seek**    |       Seeks to the given time       |  \<time>  |
|  **/shuffle**  |         Shuffles the queue          |           |
|   **/skip**    |      Skip to the current song       |           |
|   **/stop**    |           Stop the player           |           |
|  **/volume**   |          Sets music volume          | \<amount> |

## About

The project uses the following libraries:

* **[Androz2091/discord-player](https://github.com/Androz2091/discord-player)** library for the core music features
* **[discordjs](https://github.com/discordjs/discord.js)** for all the other requests to the Discord API
* **[@discordjs/voice](https://github.com/discordjs/voice)** for all the **voice** requests to the Discord API
* **[@discordjs/opus](https://github.com/discordjs/opus)** as the opus library
* **[FFMPEG](https://ffmpeg.org)** to encode the stream

## Installation

### Manual
* Install [FFMPEG](https://ffmpeg.org).
* Clone the repository. (`git clone https://github.com/Androz2091/discord-music-bot`)
* Copy the `.env.example` file as `.env` and fill it.
 - `DISCORD_CLIENT_ID`, `DISCORD_CLIENT_TOKEN` and `DISCORD_CLIENT_PUBKEY` can all be found on your Discord developer application page at https://developer.discord.com
 - `DISCORD_GUILD_ID` is the ID of the Discord server you use for development testing. You can get this by turning on developer mode in your Discord client, right clicking the server and clicking `Copy ID`.
 - `SNOWFLAKE_API_KEY` is needed for the AI chatbot and can be found at https://api.snowflakedev.org/
 - `AI_CHANNEL_ID` is the channel ID for the AI chatbot.
* Install the dependencies. (`yarn install` or `npm install`)
* Start the bot! (`node .`)

### Docker 
* Copy the `.env.example` file as `.env` and fill it.
```sh
docker build . -t discord-music-bot
docker run -d --env-file .env discord-music-bot 
```

### Example with docker-compose
```
version: '2'

services:
  bot:
    build: .
    environment:
      DISCORD_CLIENT_ID: ""
      DISCORD_CLIENT_TOKEN: ""
      DISCORD_CLIENT_PUBKEY: ""
      DISCORD_GUILD_ID: ""
```
