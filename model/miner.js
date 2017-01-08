"use strict"
const db = require('../config/db')
class Miner {
  static insertReview(name ,email,phone,subject,query,cb){
   db.query("INSERT INTO queries (name ,email,phone,subject,query)VALUES(?,?,?,?,?);" ,[name ,email,phone,subject,query],cb)
 }
}
module.exports = Miner;
