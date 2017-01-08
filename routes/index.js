var express = require('express');
var router = express.Router();
var minersaxe = require('../model/miner');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.html');
});
router.get("/about",function(req,res,next){
  res.render('about.html')
})
router.get("/faq",function(req,res,next){
  res.render('faq.html')
})
router.post("/review",function(req,res,next){
  console.log(req.body);
  minersaxe.insertReview(req.body.name,req.body.email,req.body.phone,req.body.subject,req.body.queries,(err,data) =>{
     res.json({done:"done"});
  })

})
router.get("/project",function(req,res,next){
   res.render("product-details.html");
})
module.exports = router;
