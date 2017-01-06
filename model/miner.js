"use strict"
const db = require('../config/db')
class Miner {
  static insertReview(username,carrier,state,cb){
   db.query("INSERT INTO credential_storage (agent_username ,carrier,flag)VALUES(?,?,?);" ,[username,carrier,0],cb)
 }
}
module.exports = Miner;
