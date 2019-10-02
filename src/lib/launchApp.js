/**
 * @module launchApp
 * Starts app in both (dev and prod) statements
 * Usually you don't need to change something here
 */

const express = require('express');


const launchApp = bot => {
  const app = express();

  if (process.env.NODE_ENV === 'development') {
    app.post('/', async (req, res) => {
      bot.processUpdate(req.body);
      res.sendStatus(200);
    });
  } else {
    /* Before deploy use this command:
     heroku labs:enable runtime-dyno-metadata -a <your_app_name>
     See https://devcenter.heroku.com/articles/dyno-metadata */
    const url = `https://${process.env.HEROKU_APP_NAME}.herokuapp.com:443`;
    bot.setWebHook(`${url}/bot${bot.token}`);
  }
};


module.exports = launchApp;
