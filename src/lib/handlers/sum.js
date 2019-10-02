const {sum} = require('../operations');


module.exports = (bot, msg, match) => {
  const a = +match[1];
  const b = +match[2];
  const txt = `${a} + ${b} = ${sum(a, b)}`;

  bot.sendMessage(msg.from.id, txt);
};
