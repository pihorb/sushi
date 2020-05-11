const DB = require('knex')

const connect = DB({
  client: 'sqlite3',
  connection: {
    filename: './core.sqlite',
  },
  useNullAsDefault: true,
})

module.exports = connect
