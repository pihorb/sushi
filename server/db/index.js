const DB = require('knex')
const path = require('path')

const connect = DB({
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: path.resolve(__dirname, './core.sqlite'),
  },
})

module.exports = connect

