const docs = require('../docs');


module.exports = (bot, msg) => {
  bot.sendMessage(msg.from.id, docs.help, {parse_mode: 'Markdown'});
};
