const Discord = require('discord.js');
const bot = new Discord.Client

const prefix = '!';

bot.on('ready', () => {
    bot.user.setStatus('dnd')
    bot.user.setPresence({
        game: {
            name: '.',
            type: "dnd",
            url: ""
        }
    });
});

bot.login(process.env.BOT_TOKEN);
