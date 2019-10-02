/**
 * @module createReq
 * Creates proxy object to bot if you have defined variables in .env
 * Usually you don't need to change something here
 */
const Agent = require('socks5-https-client/lib/Agent');


module.exports = () => {
  return process.env.SOCKS_HOST && process.env.SOCKS_PORT ? {
    agentClass: Agent,
    agentOptions: {
      socksHost: process.env.SOCKS_HOST,
      socksPort: process.env.SOCKS_PORT,
      socksUsername: process.env.SOCKS_USERNAME,
      socksPassword: process.env.SOCKS_PASSWORD,
    },
  } : undefined;
};
