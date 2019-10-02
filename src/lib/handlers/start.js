module.exports = (bot, msg) => {
  bot.sendMessage(msg.from.id,
                  `Hello, ${msg.from.username}!\n\n` + require('../docs').start,
                  {parse_mode: 'Markdown'});
};
