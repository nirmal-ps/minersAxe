const mysql = require('mysql')
const database = 'minersaxe'
const connection = mysql.createConnection({
  host : 'us-cdbr-iron-east-04.cleardb.net',
  user : 'b47fb12351eda7',
  password:'ea878091',
  database: 'heroku_7a47a6d56e42fe5'
})
connection.connect(function(err){
  if(err){
    console.error('error connecting: ' + err.stack)
      return
    }

    // console.log('connected as id ' + connection.threadId)
  })

  module.exports = connection
