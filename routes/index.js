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
router.get("/contact",function(req,res,next){
  res.render('contact.html')
})
router.get("/blog",function(req,res,next){
  res.render('blog.html')
})
router.get("/try",function(req,res,next){
  res.render('try.html')
})

router.get("/coins",function(req,res,next){
  res.render('coins.html')
})

router.post("/review",function(req,res,next){


  minersaxe.insertReview(req.body.name,req.body.email,req.body.phone,req.body.subject,req.body.queries,(err,data) =>{
     if(err)
       console.log("haaaaaaaaaaaaaaaaaaaa");
    console.log("myre aye");   

     res.json({done:"done"});
  })

})
router.get("/project",function(req,res,next){
   res.render("product-details.html");
})
module.exports = router;
