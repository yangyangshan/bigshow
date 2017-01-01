//数组forEach方法补丁
Array.prototype.forEach = function(callback){
	var a = 0,
		len = this.length;
	while(a < len){
		callback(this[a], a++, this);
	}
};
//数组map方法补丁
Array.prototype.map = function(callback){
	var a = 0,
		len = this.length,
		result = [];
	while(a < len){
		result.push(callback(this[a], a++, this));
	}
	return result;
};
//数组map方法补丁
Array.prototype.filter = function(callback){
	var a = -1,
		len = this.length,
		result = [];
	while(++a < len){
		callback(this[a], a, this) && result.push(this[a]);
	}
	return result;
};
var data=[
	{
		href:"#",
		url: "./image/banner1.jpg"

	},
	{
		href : "#",
		url: "./image/banner2.jpg"
	},
	{
		href : "#",
		url: "./image/banner3.jpg"
	}
]

function mainimg(dataone){ 
	function lunbotu(href,url){
		var pic=document.createElement("a");
			pic.href=href;
			pic.style.backgroundImage="url("+url+")";
			return pic;
	}
var imagesall=document.createElement("div"); 
imagesall.className="banner";
var images=dataone.map(function(item){
	var img=lunbotu(item.href,item.url);
	imagesall.appendChild(img);
	return img;
});
var a=0,
    imageslenstart=dataone.length,
	imageslen=dataone.length-1;
	images[a].className="current";
var timer=setInterval(function(){
	var a1=a;
	a = a >= imageslen ? 0 : a+1;
	images[a1].className="currentmove";
	images[a].className="current";
},5000);

imagesall.onmouseover= function () { 
   clearInterval(timer); };

imagesall.onmouseout= function() { 
   timer=setInterval(function(){
	var a1=a;
	a = a >= imageslen ? 0 : a+1;
	images[a1].className="currentmove";
	images[a].className="current";
	},5000);
 }

var lefter=document.createElement("div");
	lefter.className="leftonclick";
	lefter.onclick=function(){
		var a1=a;
		if(a==0){
			a=imageslen;
			images[a1].className="currentmove";
			images[a].className="current";
		}else{
			a = a <= imageslen ? a-1: 0 ;
		images[a1].className="currentmove";
		images[a].className="current";			
		}	
	}

var righter=document.createElement("div");
righter.className="rightonclick";
	righter.onclick=function(){
	var a1 = a; 
	a = a >= imageslen ? 0 : a + 1;
	images[a1].className="currentmove";
	images[a].className="current";	
	}
var divmid1=document.createElement("div");
divmid1.className="divmid1";

var divmid2=document.createElement("div");
divmid2.className="divmid2";
var Fragment=document.createDocumentFragment();


var cheniu=document.createElement("p");
cheniu.appendChild(document.createTextNode("大帅车"));
var cheniu1=document.createElement("span");
cheniu1.appendChild(document.createTextNode("祝您盈利能力提高%50"));
var cheniudiv=document.createElement("div");
cheniudiv.className="cheniu";
cheniudiv.appendChild(document.createTextNode("了解更多"));
var cheniup=document.createElement("p");
cheniup.appendChild(document.createTextNode("洋车"));
var cheniuspan=document.createElement("span");
cheniuspan.appendChild(document.createTextNode("车商经营的好伙伴"));
var cheniudiv1=document.createElement("div");
cheniudiv1.className="cheniu1";
cheniudiv1.appendChild(document.createTextNode("了解更多"));


divmid2.appendChild(cheniup);
divmid2.appendChild(cheniuspan);
divmid2.appendChild(cheniudiv1);
divmid1.appendChild(cheniu);
divmid1.appendChild(cheniu1);
divmid1.appendChild(cheniudiv);
images[1].appendChild(divmid2);
images[2].appendChild(divmid1);
imagesall.appendChild(righter);
imagesall.appendChild(lefter);
Fragment.appendChild(imagesall);
document.getElementById("banner").appendChild(Fragment);
}
mainimg(data);
document.getElementById("top").onclick = function(){
	scrollTo(0, 0);
};

var datalogo=[
	{
		name:"大众",
		url:"./image/brand-41.png",
		href:"https://www.baidu.com"
	},
	{
		name:"奥迪",
		url:"./image/brand-20.png",
		href:"https://www.baidu.com"
	},
	{
		name:"宝马",
		url:"./image/brand-53.png",
		href:"https://www.baidu.com"
	},
	{
		name:"奔驰",
		url:"./image/brand-41.png",
		href:"https://www.baidu.com"
	},
	{
		name:"丰田",
		url:"./image/brand-41.png",
		href:"https://www.baidu.com"
	},
	{
		name:"本田",
		url:"./image/brand-53.png",
		href:"https://www.baidu.com"
	},
	{
		name:"别克",
		url:"./image/brand-20.png",
		href:"https://www.baidu.com"
	},
	{
		name:"福特",
		url:"./image/brand-41.png",
		href:"https://www.baidu.com"
	}
]
function logo(datalogo){
	function createlogo(url,href,name){
		var pic=document.createElement("a");
		pic.style.background="url("+url+") no-repeat";
		pic.href=href;
		pic.innerText=name;
		return pic;
	}
	var midleft=document.createElement("div");
	var pics=datalogo.map(function(item){
	var logos=createlogo(item.url,item.href,item.name);
	midleft.appendChild(logos);
	return logos;
	});
    
	var lefthover=document.createElement("div");
	lefthover.className="lefthover";
	midleft.onmousemove=function(){
		lefthover.className="leftcurrent";
	};
	midleft.onmouseout=function(){
		lefthover.className="lefthover";
	};
	

	var Fragment=document.createDocumentFragment();
	midleft.appendChild(lefthover);
	Fragment.appendChild(midleft);
	document.getElementById("midlogo").appendChild(Fragment);
	}
logo(datalogo);
var dataimg=[
	{
		xinghao:"SUV",
		url:"./image/car_modal_sprite_01.png",
		href:"https://www.baidu.com"
	},
	{
		xinghao:"紧凑车型",
		url:"./image/car_modal_sprite_01.png",
		href:"https://www.baidu.com"

	},
	{
		xinghao:"中型车",
		url:"./image/car_modal_sprite_01.png",
		href:"https://www.baidu.com"

	},
	{
		xinghao:"微小车型",
		url:"./image/car_modal_sprite_01.png",
		href:"https://www.baidu.com"

	},
	{
		xinghao:"中大车型",
		url:"./image/car_modal_sprite_01.png",
		href:"https://www.baidu.com"

	},
	{
		xinghao:"MPV",
		url:"./image/car_modal_sprite_01.png",
		href:"https://www.baidu.com"

	},
	{
		xinghao:"跑车",
		url:"./image/car_modal_sprite_01.png",
		href:"https://www.baidu.com"

	}
]
function logomid(dataimg){

function createimgs(xinghao,url,href){
		var pic=document.createElement("a");
		pic.style.background="url("+url+") no-repeat 12px 0px";
		pic.href=href;
		pic.innerText=xinghao;
		return pic;
	}

var middle=document.createElement("div");
var imgs=dataimg.map(function(item){
	var chexing=createimgs(item.xinghao,item.url,item.href);
	var chexingdiv=document.createElement("div");
	chexingdiv.className="chexing";
	middle.appendChild(chexingdiv);
	chexingdiv.appendChild(chexing);
	return chexing;
	});

var midhover=document.createElement("div");
	midhover.className="midhover";
	document.getElementById("midmid").onmousemove=function(){
		midhover.className="midcurrent";
	};
	document.getElementById("midmid").onmouseout=function(){
		midhover.className="midhover";
	};

var imgsFragment=document.createDocumentFragment();
middle.appendChild(midhover);
imgsFragment.appendChild(middle);
document.getElementById("midmid").appendChild(imgsFragment);
}

logomid(dataimg);

var datamoney=[
	{
		money:"8万以下",
		href:""
	},
	{
		money:"8-10万",
		href:""
	},
	{
		money:"10-15万",
		href:""
	},
	{
		money:"15-20万",
		href:""
	},
	{
		money:"20-30万",
		href:""
	},
	{
		money:"30-50万",
		href:""
	},
	{
		money:"50万以上",
		href:""
	}

]

function money(datamoney){

function createmoney(money,href){
		var pic=document.createElement("a");
		pic.href=href;
		pic.innerText=money;
		return pic;
	}

var midright=document.createElement("div");
midright.className="rightmoney";
var moneys=datamoney.map(function(item){
	var jiage=createmoney(item.money,item.href);
	midright.appendChild(jiage);
	return jiage;
	});

var moneyFragment=document.createDocumentFragment();
// midright.appendChild(midhover);
moneyFragment.appendChild(midright);
document.getElementById("midright").appendChild(moneyFragment);
}

money(datamoney);

var datamain=[
	{
		href:"#",
		url:"./image/84145234D6D86B139759C93EF5F8E576_285x240.jpg",
		color:"white",
		span:"豪车不止BBA",
		em:"德系三驾马车,是时候退位让洋了",
		img:"./image/650DBD6CB57B8F25F3841226B07001FC_160x105.png"
	},
	{
		href:"#",
		url:"./image/FE79D6B98A482CE3DDE0B02C13C196DA_285x240.jpg",
		color:"white",
		span:"豪车不止BBA",
		em:"德系三驾马车,是时候退位让洋了",
		img:"./image/748EA19E6AF75B18307CE6B78AE8708F_160x105.png"
	},
	{
		href:"#",
		url:"./image/FE79D6B98A482CE3DDE0B02C13C196DA_285x240.jpg",
		color:"white",
		span:"豪车不止BBA",
		em:"德系三驾马车,是时候退位让洋了",
		img:"./image/F0587A654F8B0FF2A66757BC4D2F750A_180x86.png"
	},
	{
		href:"#",
		url:"./image/84145234D6D86B139759C93EF5F8E576_285x240.jpg",
		color:"white",
		span:"豪车不止BBA",
		em:"德系三驾马车,是时候退位让洋了",
		img:"./image/B1C0FBAE06D1FED840C31D3C55651191_160x105.png"
	},
	{
		href:"#",
		url:"./image/84145234D6D86B139759C93EF5F8E576_285x240.jpg",
		color:"white",
		span:"豪车不止BBA",
		em:"德系三驾马车,是时候退位让洋了",
		img:"./image/2BF2D677D519CBAE0D9F8F64FA3F0F5F_160x95.png"
	},
	{
		href:"#",
		url:"./image/FE79D6B98A482CE3DDE0B02C13C196DA_285x240.jpg",
		color:"white",
		span:"豪车不止BBA",
		em:"德系三驾马车,是时候退位让洋了",
		img:"./image/E4D855E0EAA81F2209A68519220C702A_240x174.png"
	}
]

function main(datamain){
 function createmain(href,url,color,span,em,img){
		var pic=document.createElement("a");
			mainspan=document.createElement("span");
			mainem=document.createElement("em");
			mainimgdiv=document.createElement("div");
			mainimg=document.createElement("img");
			mainimgdiv.className="mainhover";

		pic.className="mainpic";
		pic.href=href;
		pic.style.background="url("+url+") no-repeat";
		pic.style.backgroundColor=color;
		mainspan.innerHTML=span;
		mainem.innerHTML=em;
		mainimg.src=img;

		pic.appendChild(mainspan);
		pic.appendChild(mainem);
		pic.appendChild(mainimgdiv);
		mainimgdiv.appendChild(mainimg);

		return pic;
	}


 var mainpics=document.createElement("div");
 mainpics.className="mainpics";
 var zhongjian=datamain.map(function(item){
	var mainimgs=createmain(item.href,item.url,item.color,item.span,item.em,item.img);
		mainpics.appendChild(mainimgs);
	return mainimgs;
	});

 var mainFragment=document.createDocumentFragment();
 mainFragment.appendChild(mainpics);
 document.getElementById("mainimg").appendChild(mainFragment);
}

main(datamain);

var end=[
	{
		title:"导购大全",
		options:[
			{
				name:"城市大全",
				href:"./carsshow5.html"
			},
			{
				name:"品牌大全",
				href:"./carsshow6.html"
			},
			{
				name:"车系大全",
				href:"./carsshow10.html"
			}
		]
	},
	{
		title:"购车指南",
		options:[
			{
				name:"如何挑选二手车",
				href:"./carsshow9.html"
			},
			{
				name:"如何判断事故火烧水浸车",
				href:"./carsshow7.html"
			},
			{
				name:"二手车指标说明",
				href:"./carsshow8.html"
			}
		]
	},
	{
		title:"关于我们",
		options:[
			{
				name:"帅帅车理念",
				href:"http://www.souche.com/"
			},
			{
				name:"帅车",
				href:"http://www.souche.com/"
			},
			{
				name:"大帅车",
				href:"http://www.souche.com/"
			},
			{
				name:"帅帅车手机版",
				href:"http://www.souche.com/"
			}
		]
	},
	{
		title:"联系我们",
		options:[
			{
				name:"联系我们",
				href:"http://www.souche.com/"
			}										
		]
	}
	]


function ender(endlist){
function createend(title,option){
	var listall=document.createElement("div"),
		every=document.createElement("div"),
		titles=document.createElement("span"),
		ul=function(){
			var ul=document.createElement("ul");
			option.forEach(function(option){
			var li=document.createElement("li");
			var brown=document.createElement("a");
				brown.innerText=option.name;
				brown.href=option.href;
				li.appendChild(brown);
				ul.appendChild(li);
		});
		return ul;
	}();

	every.className="everyul";

	titles.innerHTML=title;
	listall.appendChild(every);
	every.appendChild(titles);
	every.appendChild(ul);

	return listall;
}

var endnav=document.createElement("div");
endnav.className="endtop";
var hahaha=endlist.map(function(item){
	var endlists=createend(item.title,item.options);
	endnav.appendChild(endlists);
	return endlists;
})

var weixin=document.createElement("div");
	weixin.className="weixin";
var weixinspan=document.createElement("span");
	weixinspan.innerHTML="扫一扫，关注微信公众号";

var endFragment=document.createDocumentFragment();
weixin.appendChild(weixinspan);
endnav.appendChild(weixin);
endFragment.appendChild(endnav);
document.getElementById("bottomNav").appendChild(endFragment);
}
ender(end);

var endmid=[
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:""
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
		{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
		{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
		{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
		{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
		{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:""
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	},
	{
		title:"帅帅车理念",
		name:"哈哈",
		href:"#"
	}
]

function createendmid(endmid){
function createmiddle(title,name,href){
	var endadd=document.createElement("a");
		endadd.title=title;
		endadd.innerHTML=name;
		endadd.href=href;

		return endadd;
	}

var endmidFragment=document.createDocumentFragment();
var hehehe=endmid.map(function(item){
	var endmida=createmiddle(item.title,item.name,item.href);
	endmidFragment.appendChild(endmida);
	return endmida;
})

document.getElementById("bottommid").appendChild(endmidFragment);
}

createendmid(endmid);

var bottomfoot=[
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息",
		href:""
	},
	{
		name:"车险信息",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息网",
		href:""
	},
	{
		name:"车险信息王",
		href:""
	},
	{
		name:"搜狐二手车",
		href:""
	},
	{
		name:"车300估价",
		href:""
	},
	{
		name:"58二手车",
		href:""
	},
	{
		name:"二手车评估",
		href:""
	}
]

function footer(bottomfoot){
function createfoot(name,href){
	var endline=document.createElement("a");
		endline.innerHTML=name;
		endline.href=href;

		return endline;
}

var footerdiv=document.createElement("div");
footerdiv.className="footerdiv";
var heihei=bottomfoot.map(function(item){
	var footera=createfoot(item.name,item.href);
	footerdiv.appendChild(footera);
	return footera;
})
var endFragment=document.createDocumentFragment();
endFragment.appendChild(footerdiv);
document.getElementById("bottomend").appendChild(endFragment);	 
}

footer(bottomfoot);

function header(){
window.onscroll=function(){
    var length=document.documentElement.scrollTop||document.body.scrollTop;
    var width=document.getElementById('header');
  
   if(length>0){
    width.style.top="0px";
    width.style.transition='top 0.5s';
    }
   else if(length<=0){
    width.style.top="-80px";
    width.style.transition='top 0.5s';
	}
	}
var headermain=document.createElement("div");
headermain.className="headermain";
var endFragment=document.createDocumentFragment();
endFragment.appendChild(headermain);
document.getElementById("header").appendChild(endFragment);
}

header();

var btnsignin=document.getElementById("btnup"),
	shadowup=document.getElementById("shadowup"),
	trysignup=document.getElementById("trysignup");
	btnsignin.onclick=function(){
		shadowup.style.display=trysignup.style.display="block";
	}
	shadowup.onclick=function(){
		this.style.display=trysignup.style.display="none";
	}