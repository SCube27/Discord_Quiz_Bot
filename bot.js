import { Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const token = process.env.BOT_TOKEN;
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildEmojisAndStickers, GatewayIntentBits.GuildScheduledEvents, GatewayIntentBits.GuildMessageReactions, GatewayIntentBits.MessageContent] });

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;

    if(message.content == "Please Help!") { 
        message.reply("At your service");
    }
});

client.on('interactionCreate', (interaction) => {
    interaction.reply("Starting the Quiz Shortly!");
})

client.login(token);