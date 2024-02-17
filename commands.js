import { REST, Routes } from 'discord.js';
import dotenv from 'dotenv';
dotenv.config();

const TOKEN = process.env.BOT_TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;

const commands = [
    {
        name : 'start',
        description : 'Starts a new Quiz',
    },
];

const rest = new REST({ version: '10' }).setToken(TOKEN);

(async() => {
    try {
        console.log('Started refreshing application (/) commands.');
      
        await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });
      
        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();