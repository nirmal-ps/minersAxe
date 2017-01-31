const mysql = require('mysql')
const database = 'minersaxe'
const connection = mysql.createConnection({
  host : 'mysql://us-cdbr-iron-east-04.cleardb.net/heroku_7a47a6d56e42fe5?reconnect=true',
  user : 'b47fb12351eda7',
  password:'ea878091',
  database: database
})
connection.connect(function(err){
  if(err){
    console.error('error connecting: ' + err.stack)
      return
    }

    // console.log('connected as id ' + connection.threadId)
  })

  module.exports = connection
