const express = require('express')
const connect = require('mysql2')
const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters');
const { keyboard } = require('telegraf/markup');
require('dotenv').config();

const app = express()
const PORT = process.env.PORT | 4000


const bot = new Telegraf(process.env.BOT_TOKEN)

const mainMenu = {
  reply_markup: {
    keyboard: [
      ['📊 View Reports', '📅 Schedule Campaign'],
      ['💡 Content Ideas', '📞 Contact Support']
    ],
    resize_keyboard: true,
    one_time_keyboard: false,
  },
};

// Handle /start command
bot.start((ctx) => {
  ctx.reply(
    `Hello ${ctx.from.first_name}! Welcome to the Digital Marketing Bot.\nChoose an option from the menu below:`,
    mainMenu
  );
});

// Handle menu button presses
bot.on('text', (ctx) => {
  const text = ctx.message.text;
  switch (text) {
    case '📊 View Reports':
      
      break;
    case '📅 Schedule Campaign':
      ctx.reply('Please send the campaign details...');
      break;
    case '💡 Content Ideas':
      ctx.reply('Here are some content ideas...');
      break;
    case '📞 Contact Support':
      ctx.reply('You can reach support at support@example.com');
      break;
  }
});

bot.launch();

app.listen(PORT,()=>{
    console.log(`Server Started on port ${PORT}`)
})