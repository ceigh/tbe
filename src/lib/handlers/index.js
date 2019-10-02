/**
 * @module
 * Main handlers module
 * Define here all your commands
 */

const start = require('./start');
const help = require('./help');
const sum = require('./sum');

// If you want to use reply keyboard, define all callbacks in queries module
// const queries = require('../queries');


module.exports.load = bot => {
  bot.onText(/^\/start$/, msg => start(bot, msg));

  bot.onText(/^\/help$/, msg => help(bot, msg));

  bot.onText(/^\/sum (\d+) (\d+)$/,
               (msg, match) => sum(bot, msg, match));

  // bot.on('callback_query', query => {
  //   const act = query.data;
  //   if (queries.hasOwnProperty(act)) queries[act](bot, query);
  // });
};
