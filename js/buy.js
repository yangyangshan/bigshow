function createBox(option){
	var box = document.createElement("div");
	box.className = "box";
	box.style.backgroundImage = "url(" + option.url + ")";
	box.innerHTML = [
		"<div class=\"detail\">",
		"<a href=\"",
		option.id,
		"\">",
		option.title,
		"</a>",
		"<p class=\"price\">",
		"￥",
		option.price,
		"万</p>",
		"<p class=\"content\">",
		function(){
			var date = new Date(option.lisenceTime);
			return [
				date.getFullYear(),
				"/",
				date.getMonth() + 1
			].join("");
		}(),
		"上牌 | ",
		option.kilometer,
		"万公里 | ",
		option.province,
		"</p>",
		"<div class=\"mark\">",
		"<em>",
		["商家", "实名"][option.isPersonal],
		"认证</em>",
		"</div>",
		"</div>",
		["", "<i class=\"sold\">已售</i>"][option.isSold],
	].join("");
	return box;
}
var carData = eval('([{"title":"福特 2013款 翼虎 1.6L GTDi 两驱舒适型","url":"./image/twotwotwo.png","price":"13.6","lisenceTime":1377964800000,"kilometer":"3.81","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"别克 2010款 昂科雷 3.6L 精英版","url":"./image/threethree.jpg","price":"18.8","lisenceTime":1293811200000,"kilometer":"12.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souch.html?carId=c80e86eff4434f55999268409f39c62d"},{"title":"2013款 宝马Z4 sDrive20i领先型","url":"./image/836c030bec5c1cd4a89b11ba80294ab9.png","price":"31.5","lisenceTime":1372608000000,"kilometer":"6.00","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"雪佛兰 2009款 科鲁兹 1.6L SL AT","url":"./image/19926646_1366116782103_240x160.jpg","price":"6.3","lisenceTime":1285862400000,"kilometer":"9.00","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"保时捷 2017款 Macan Macan 2.0T","url":"./image/8859895bf3e3f3484082fc6530b31f90.JPG","price":"63.5","lisenceTime":1464710400000,"kilometer":"0.69","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"别克 2013款 凯越 1.5L 自动经典型","url":"./image/476429beb9521280c6d72f777d5fa9ec.png","price":"5.98","lisenceTime":1385827200000,"kilometer":"5.80","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"别克 2010款 凯越 1.6 自动 LE 智能加装版","url":"./image/c06d1abfce0c4349be3e4a62ba48794c.png","price":"4.28","lisenceTime":1254326400000,"kilometer":"9.00","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"2015款 奥迪Q7 40 TFSI 尊藏型","url":"./image/5623228a15b082a5c40d73a5ce3b7ce8.png","price":"61.8","lisenceTime":1438358400000,"kilometer":"2.31","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"路虎 2016款 发现神行 2.0T S","url":"./image/5623228a15b082a5c40d73a5ce3b7ce8.png","price":"48","lisenceTime":1427817600000,"kilometer":"3.16","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"2015款 北京现代ix35 2.0L 自动两驱智能型 国V","url":"./image/u=629175760,302655784&fm=11&gp=0.jpg","price":"13.98","lisenceTime":1443628800000,"kilometer":"3.85","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"2014款 奥迪A6L 30 FSI 豪华型","url":"./image/u=663287405,707431064&fm=21&gp=0.jpg","price":"33.5","lisenceTime":1417363200000,"kilometer":"3.30","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"路虎 2015款 揽胜极光 2.0T 五门锐动版","url":"./image/u=1362957772,1740393544&fm=21&gp=0.jpg","price":"39.8","lisenceTime":1427817600000,"kilometer":"1.10","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"2011款 奔驰SLK级 SLK 200 时尚型","url":"./image/u=1810901650,4145149171&fm=21&gp=0.jpg","price":"32.8","lisenceTime":1377964800000,"kilometer":"2.00","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"2012款 奔驰S级 S 350 L Grand Edition","url":"./image/u=1823964803,3897303681&fm=21&gp=0.jpg","price":"66.8","lisenceTime":1359648000000,"kilometer":"8.60","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"2011款 奔驰SLK级 SLK 200 时尚型","url":"./image/u=1948822807,808245208&fm=21&gp=0.jpg","price":"32.8","lisenceTime":1377964800000,"kilometer":"2.00","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"2014款 捷豹XF XF 2.0T 豪华版","url":"./image/u=2014386228,3412860629&fm=21&gp=0.jpg","price":"32.98","lisenceTime":1391184000000,"kilometer":"8.32","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"日产 2015款 天籁 2.5L XL-NAVI Tech欧冠智享版","url":"./image/yangshuai1.jpg","price":"17.8","lisenceTime":1438358400000,"kilometer":"2.40","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"现代 2010款 悦动 1.6L 自动 GLS","url":"./image/yangshuai2.jpg","price":"4.5","lisenceTime":1254326400000,"kilometer":"13.82","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"丰田 2013款 卡罗拉 特装版 1.8L 无级变速至酷版GL-i","url":"./image/yangshuai3.jpg","price":"10.5","lisenceTime":1388505600000,"kilometer":"2.25","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"福特 2013款 翼搏 1.5L 手动舒适型","url":"./image/yangshuai4.jpg","price":"6.6","lisenceTime":1388505600000,"kilometer":"5.00","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"2012款 奥迪Q5 2.0TFSI 技术型","url":"./image/yangshuai6.jpg","price":"25.8","lisenceTime":1338480000000,"kilometer":"6.50","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"别克 2006款 凯越 LX 1.6 手动 基本版","url":"./image/yangshuai7.jpg","price":"1.8","lisenceTime":1138723200000,"kilometer":"10.00","province":"浙江","isPersonal":0,"isSold":0,"id":"#"},{"title":"马自达 2010款 睿翼 2.0L 自动豪华版","url":"./image/90e6ba7565a61990c6e802.jpg","price":"9.8","lisenceTime":1296489600000,"kilometer":"6.82","province":"浙江","isPersonal":1,"isSold":0,"id":"#"},{"title":"现代 2014款 索纳塔八 2.4L 自动豪华版 国IV","url":"./image/yangshuai8.jpg","price":"14.8","lisenceTime":1425139200000,"kilometer":"2.10","province":"浙江","isPersonal":1,"isSold":0,"id":"#"}])');
var renderCars = function(){
	var container = document.getElementById("cars");
	return function(data){
		container.innerText = "";
		var carFragment = document.createDocumentFragment();
		data.forEach(function(item){
			carFragment.appendChild(createBox(item));
		});
		container.appendChild(carFragment);
	};
}();
renderCars(carData);
var filterSetting = [
	{
		title : "里程",
		options : [
			{
				name : "1万公里以内",
				value : 1
			},
			{
				name : "3万公里以内",
				value : 3
			},
			{
				name : "5万公里以内",
				value : 5
			},
			{
				name : "8万公里以内",
				value : 8
			}
		]
	},
	{
		title : "变速箱",
		options : [
			{
				name : "MT-手动",
				value : 1
			},
			{
				name : "AT-自动",
				value : 2
			}
		]
	},
	{
		title : "排量",
		options : [
			{
				name : "1.0L以下",
				value : "1.0"
			},
			{
				name : "1.1L-1.6L",
				value : "1.1"
			},
			{
				name : "1.6L-2.0L",
				value : "1.6"
			},
			{
				name : "2.0L-2.5L",
				value : "2.0"
			},
			{
				name : "2.5L-3.0L",
				value : "2.5"
			},
			{
				name : "3.0L-4.0L",
				value : "3.0"
			},
			{
				name : "4.0L以上",
				value : "4.0"
			}
		]
	},
	{
		title : "排放标准",
		options : [
			{
				name : "国二及以上",
				value : 1
			},
			{
				name : "国三及以上",
				value : 2
			},
			{
				name : "国四及以上",
				value : 3
			}
		]
	},
	{
		title : "国别",
		options : [
			{
				name : "德国",
				value : "101"
			},
			{
				name : "日本",
				value : "308"
			},
			{
				name : "美国",
				value : "123"
			},
			{
				name : "韩国",
				value : "212"
			},
			{
				name : "中国",
				value : "095"
			}
		]
	},
	{
		title : "价格",
		options : [
			{
				name : "5万元以下",
				value : "0-5"
			},
			{
				name : "5-10万元间",
				value : "5-10"
			},
			{
				name : "10-20万元间",
				value : "10-20"
			},
			{
				name : "20-50万元间",
				value : "20-50"
			},
			{
				name : "50万元以上",
				value : "50-5000"
			}
		]
	}
];
function createSelect(option){
	var container = document.createElement("div"),
		title = document.createElement("h2"),
		select = document.createElement("div"),
		placeholder = document.createElement("span"),
		icon = document.createElement("i"),
		ul = function(){
			var ul = document.createElement("ul");
			option.options.forEach(function(item){
				var li = document.createElement("li");
				li.innerText = item.name;
				li.onclick = function(){
					renderCars(carData.filter(function(_item){
						return option.filterFunc(_item, item.value);
					}));
					placeholder.innerText = item.name;
				};
				ul.appendChild(li);
			});
			var _default = document.createElement("li");
			_default.innerText = "不限";
			_default.onclick = function(){
				renderCars(carData);
				placeholder.innerText = "请选择" + option.title;
			};
			ul.appendChild(_default);
			return ul;
		}(),
		status = 0;
	container.className = "row";
	placeholder.innerText = "请选择" + option.title;
	icon.className = "icon2 down";
	select.onclick = function(){
		select.className = ["select ", ["normal", "current"][status]].join("");
		status ^= 1;
	};
	title.innerText = option.title;
	select.className = "select normal";
	select.appendChild(placeholder);
	select.appendChild(icon);
	select.appendChild(ul);
	container.appendChild(title);
	container.appendChild(select);
	return container;
}
var filterFragment = document.createDocumentFragment(),
	//解耦
	filterFunc = [
		function(item, value){
			return item.kilometer < value;
		},,,,,
		function(item, value){
			var a = value.split("-");
			return +item.price > a[0] && +item.price < a[1];
		}
	];
filterSetting.forEach(function(item, index){
	item.filterFunc = filterFunc[index];
	filterFragment.appendChild(createSelect(item));
});
document.getElementById("bottom").appendChild(filterFragment);


var divtimer=document.createElement("div");
		var divinput=document.createElement("div");
			divinput.className="timerstart";
		var divwenzi=document.createElement("span");
		divwenzi.appendChild(document.createTextNode("起始时间"));
		var divtimerhover=document.createElement("div");
		divtimerhover.className="timerhover";
			divinput.onclick=function(){
				if(divtimerhover.style.display=="none")
					{
					divtimerhover.style.display="block"
				}else{
					divtimerhover.style.display="none";
				}
				
			}
		divinput.appendChild(divtimerhover);
		divinput.appendChild(divwenzi);
		
		var divwengzimid=document.createElement("h5");
		divwengzimid.className="wengzi";
		divwengzimid.appendChild(document.createTextNode("至"));

		var divinputs=document.createElement("div");
		divinputs.className="timerend";
		var divwenzis=document.createElement("span");
		divwenzis.appendChild(document.createTextNode("2014"));
		var divtimerhovers=document.createElement("div");
		divtimerhovers.className="timerhovers";
			divinputs.onclick=function(){
				if(divtimerhovers.style.display=="none")
					{
					divtimerhovers.style.display="block"
				}else{
					divtimerhovers.style.display="none";
				}
				
			}
		
		
		divtimer.appendChild(divinput);
		divtimer.appendChild(divwengzimid);
		divtimer.appendChild(divinputs);
		divinputs.appendChild(divwenzis);
		divinputs.appendChild(divtimerhovers);
		document.getElementById("mainleft").appendChild(divtimer);


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
					name:"洋车",
					href:"http://www.souche.com/"
				},
				{
					name:"帅车",
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
	headerimg=document.createElement("img");
headermain.className="headermain";
headerimg.src="./image/logo.png";
var endFragment=document.createDocumentFragment();
headermain.appendChild(headerimg);
endFragment.appendChild(headermain);
document.getElementById("header").appendChild(endFragment);
}
