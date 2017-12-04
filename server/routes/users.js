var express = require('express');
var router = express.Router();

var handler = require('./handler.js');
var crypto = require('crypto');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//登录
router.post('/login', function(req, res, next) {
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');
  handler(req, res, "user", {name: req.body.username},function(data){
    if(data.length===0){
      res.end('{"err":"抱歉，系统中并无该用户，如有需要，请向管理员申请"}');
    }else if(data[0].password !== password){
      res.end('{"err":"密码不正确"}');
    }else if(data.length!==0&&data[0].password===password){
      req.session.username = req.body.username; //存session
      req.session.password = password;
      res.end('{"success":"true"}');
    }
  });
});
//注册
router.post('/sign', function(req, res, next) {
  var md5 = crypto.createHash('md5');
  var password = md5.update(req.body.password).digest('base64');
  handler(req, res, "user", {name: req.body.username,phone : req.body.phone,password:password},function(data){
    console.log(data)
    if(data.length!==0){
      req.session.username = req.body.username;   //存session
      req.session.phone = req.body.phone;
      req.session.password = password;
      res.end('{"success":"true"}');
    }else{
      //res.end('{"err":"抱歉，此账号已被占用"}');
      res.end('{"err":"sorry，This account has been occupied"}');
    }
  });
});
//退出
router.post('/logout', function(req, res, next) {
  req.session.username = ""; //清除session
  req.session.password = "";
  res.end('{"success":"true"}');
});
module.exports = router;
