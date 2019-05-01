const TelegramBot = require('node-telegram-bot-api')
const os = require('os')

const bot = new TelegramBot('874043651:AAFTY9XjxaCVxDuZlkap2ZM7jUtaeihkXvU', {polling: true})


bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, `Hello from ${os.type()}  "${msg.from.first_name}"`)
})