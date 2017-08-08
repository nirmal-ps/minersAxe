var express = require('express');
var router = express.Router();
//var minersaxe = require('../model/miner');
var nodemailer = require('nodemailer');
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
router.post("/externalMail",function(req,res,next){
  console.log("haaaaaaaaaaaaaaaa")
 
  // minersaxe.insertReview(req.body.name,req.body.email,req.body.phone,req.body.subject,req.body.queries,(err,data) =>{
  //       res.json({done:"done"});
  // })
 var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'way2nirmalps@gmail.com',
    pass: 'nimmu9388222623'
  }
});

var mailOptions = {
  from: req.body.from,
  to: req.body.to,
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
})
router.post("/review",function(req,res,next){
  console.log("haaaaaaaaaaaaaaaa")
 
  // minersaxe.insertReview(req.body.name,req.body.email,req.body.phone,req.body.subject,req.body.queries,(err,data) =>{
  //       res.json({done:"done"});
  // })
  var smtpConfig = {
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: 'minersaxeofficial@gmail.com',
        pass: 'minersaxe@12'
    }
};


    var transporter = nodemailer.createTransport(smtpConfig);
    var text = 'Hi new contact message for you \n\nName:' + req.body.name+'\nEmail:'+req.body.email+"\n phone:"+req.body.phone+"\nsubject:"+req.body.subject+"\nQueries:"+req.body.queries;
    console.log("haaaaaaaaaaaaaaaa",text)
    var mailOptions = {
        from: 'way2nirmalps@gmail.com', // sender address
        to: 'minersaxeofficial@gmail.com', // list of receivers
        subject: 'Contact message', // Subject line
        text: text //, // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    }
    transporter.sendMail(mailOptions, function(error, info){
        if(error){
            console.log(error);
            res.json({yo: 'error'});
        }else{
            console.log('Message sent: ' + info.response);
            res.json({yo: info.response});
        };
    });

})
router.get("/project",function(req,res,next){
   res.render("product-details.html");
})
module.exports = router;
