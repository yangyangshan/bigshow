var User={};
var fs=require("fs");
var express=require("express"),
	app=express();
function getCode(length){
	var num=parseInt(Math.random()*Math.pow(10,length))+"";
	return num;
}
app
	.use(express.static("./static"))
	.get("/",function(req,res){
		fs.readFile("./index.html","utf-8",function(err,file){
			res.send(file);
		});
	})
	.get("/getCode",function(req,res){
		var query=req.query,
			code=getCode(6);
		User[query.user]={
			code:code
		};
		res.json({
			code:0,
			captcha:code
		})
	})
	.get("/signUp",function(req,res){
		var query=req.query;
		// console.log(req);
		if(User[query.user] && User[query.user].code===query.code){
			res.json({
				user:query.user,
				password:query.password,
				code:query.code,
				message:"注册成功"
			});
		}else{	
			res.json({
				code:1,
				message:"注册失败，查看验证码或用户名"
			});
		}
		
	})
	.get("/getUsers",function(req,res){
		res.json(User);
	})
	//json自带方法，向浏览器传对象。
	// .get("/signIn",function(req,res){
	// 	var query=req.query,
	// 		code=getCode(6),
	// 		isSuccess=+!(code===query.code);
	// 	res.json({
	// 		code:isSuccess,
	// 		data:query.user,
	// 		message:["登陆成功","登录失败"][isSuccess]
	// 	});
	// })
	.listen(666);