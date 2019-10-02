// This is additional module to run from console

require('dotenv').config();
const {Client} = require('pg');


const {DATABASE_URL} = process.env;
const tableName = 'bets';
const createTableCfg =
    `CREATE TABLE ${tableName}(cell type, 
                               cell type, 
                               cell type);`;
const client = new Client({connectionString: DATABASE_URL, ssl: true});


client.connect();
client.query(createTableCfg, (err, res) => {
  client.end();
  if (err) throw err;
  console.log(res);
});
