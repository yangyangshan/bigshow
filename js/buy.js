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
var carData = eval('([{"title":"福特 2013款 翼虎 1.6L GTDi 两驱舒适型","url":"http://f.souche.com/5902aeb738faa21e0b6dd22080fea3b7.png?imageView2/1/w/240/h/160","price":"13.6","lisenceTime":1377964800000,"kilometer":"3.81","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=udBqUnsfao"},{"title":"别克 2010款 昂科雷 3.6L 精英版","url":"http://img.souche.com/20161129/jpg/d7e6c229cd2a9db9b8badc66ecc234a9.jpg","price":"18.8","lisenceTime":1293811200000,"kilometer":"12.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=c80e86eff4434f55999268409f39c62d"},{"title":"2013款 宝马Z4 sDrive20i领先型","url":"http://img.souche.com/files/default/d827a4b2d9cd6b9740bf741922083dca.png@1e_240w_160h_1c_0i_1o_90Q_1x.jpg","price":"31.5","lisenceTime":1372608000000,"kilometer":"6.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=d23260938f9345639bdff8d8f58ec84d"},{"title":"雪佛兰 2009款 科鲁兹 1.6L SL AT","url":"http://img.souche.com/files/default/8e893f51d6bd3011c985457dd674c1b8.png","price":"6.3","lisenceTime":1285862400000,"kilometer":"9.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=4938e7dbb6574316af857eb4d53fa10c"},{"title":"保时捷 2017款 Macan Macan 2.0T","url":"http://f.souche.com/df1fbcd5adf79e3746849258fd43f3e9.png?imageView2/1/w/240/h/160","price":"63.5","lisenceTime":1464710400000,"kilometer":"0.69","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=MtKJ3rKTw1"},{"title":"别克 2013款 凯越 1.5L 自动经典型","url":"http://img.souche.com/20161129/jpg/2eb9a154383685fe4923a77e05b7960a.jpg","price":"5.98","lisenceTime":1385827200000,"kilometer":"5.80","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=855b0351e1d349d88f5387f30d2f95fb"},{"title":"别克 2010款 凯越 1.6 自动 LE 智能加装版","url":"http://f.souche.com/81d5017769ffe1dee264c1a2cbf6c47b.jpg?imageView2/1/w/240/h/160","price":"4.28","lisenceTime":1254326400000,"kilometer":"9.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=ujoWGXN5Yr"},{"title":"2015款 奥迪Q7 40 TFSI 尊藏型","url":"http://f.souche.com/e30ae1b7fba54af4f597f4ad3d30002c.png?imageView2/1/w/240/h/160","price":"61.8","lisenceTime":1438358400000,"kilometer":"2.31","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=YQcjSihoZc"},{"title":"路虎 2016款 发现神行 2.0T S","url":"http://f.souche.com/77abb7bc7851292be625efce0a9b6543.png?imageView2/1/w/240/h/160","price":"48","lisenceTime":1427817600000,"kilometer":"3.16","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=5iDpmx3ckC"},{"title":"2015款 北京现代ix35 2.0L 自动两驱智能型 国V","url":"http://img.souche.com/20161129/JPG/64423d9c5cc12847140b98d61594de7c.JPG","price":"13.98","lisenceTime":1443628800000,"kilometer":"3.85","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=e78f601f897c4b32a0032ecc9faa5e69"},{"title":"2014款 奥迪A6L 30 FSI 豪华型","url":"http://f.souche.com/4795b407d33772cc52d05c4919fd13dd.png?imageView2/1/w/240/h/160","price":"33.5","lisenceTime":1417363200000,"kilometer":"3.30","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=7dBoeyvwmd"},{"title":"路虎 2015款 揽胜极光 2.0T 五门锐动版","url":"http://img.souche.com/20161129/JPG/fbc7eb69cb82a6a2df8533fab4c5d041.JPG","price":"39.8","lisenceTime":1427817600000,"kilometer":"1.10","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=5934ac0e68064aeeb269a1be4c8681d9"},{"title":"2011款 奔驰SLK级 SLK 200 时尚型","url":"http://img.souche.com/files/default/4485fd058b9d6ed5a7cbe6999c5c0e4c.jpg","price":"32.8","lisenceTime":1377964800000,"kilometer":"2.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=936457a317d74b61bbd4b91f24b3e14c"},{"title":"2012款 奔驰S级 S 350 L Grand Edition","url":"http://img.souche.com/20160924/JPG/f4003158ad8aec8dfc7c6c71c1c9c497.JPG","price":"66.8","lisenceTime":1359648000000,"kilometer":"8.60","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=f0337ba573be48098e844cdf56ca0373"},{"title":"2011款 奔驰SLK级 SLK 200 时尚型","url":"http://f.souche.com/d63bf736bf3f866747c513d4039e5d19.jpg?imageView2/1/w/240/h/160","price":"32.8","lisenceTime":1377964800000,"kilometer":"2.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=GgKdE6xvNM"},{"title":"2014款 捷豹XF XF 2.0T 豪华版","url":"http://img.souche.com/20160916/JPG/451bac21002bf8cb2950fc6aa5d47143.JPG","price":"32.98","lisenceTime":1391184000000,"kilometer":"8.32","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=82e6fe6a0309492dadbf2e56b15e715e"},{"title":"日产 2015款 天籁 2.5L XL-NAVI Tech欧冠智享版","url":"http://img.souche.com/20161129/jpg/6e47a25b6f89a6d43445d409afd1d4af.jpg","price":"17.8","lisenceTime":1438358400000,"kilometer":"2.40","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=1d826cd7a45b4358a46426983115addc"},{"title":"现代 2010款 悦动 1.6L 自动 GLS","url":"http://f.souche.com/e1c3f3efa6396cc89a29652fced69b8d.png?imageView2/1/w/240/h/160","price":"4.5","lisenceTime":1254326400000,"kilometer":"13.82","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=epTOJZcuoB"},{"title":"丰田 2013款 卡罗拉 特装版 1.8L 无级变速至酷版GL-i","url":"http://f.souche.com/7d6c16abd2eaabe73841bd45eeb4106d.png?imageView2/1/w/240/h/160","price":"10.5","lisenceTime":1388505600000,"kilometer":"2.25","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=P7qN6qcyB6"},{"title":"福特 2013款 翼搏 1.5L 手动舒适型","url":"http://f.souche.com/45ea02e2640f1f28bd06ac3b2c9379db.png?imageView2/1/w/240/h/160","price":"6.6","lisenceTime":1388505600000,"kilometer":"5.00","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=RGLTFzHk7N"},{"title":"2012款 奥迪Q5 2.0TFSI 技术型","url":"https://res.souche.com/images/fed/zhanwei.png","price":"25.8","lisenceTime":1338480000000,"kilometer":"6.50","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=37e7621751e144a28fb1b997180241e7"},{"title":"别克 2006款 凯越 LX 1.6 手动 基本版","url":"https://res.souche.com/images/fed/zhanwei.png","price":"1.8","lisenceTime":1138723200000,"kilometer":"10.00","province":"浙江","isPersonal":0,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=bb89d905f6e841e9b3f8ac695d77a285"},{"title":"马自达 2010款 睿翼 2.0L 自动豪华版","url":"https://res.souche.com/images/fed/zhanwei.png","price":"9.8","lisenceTime":1296489600000,"kilometer":"6.82","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=L4kQbcbbKj"},{"title":"现代 2014款 索纳塔八 2.4L 自动豪华版 国IV","url":"https://res.souche.com/images/fed/zhanwei.png","price":"14.8","lisenceTime":1425139200000,"kilometer":"2.10","province":"浙江","isPersonal":1,"isSold":0,"id":"https://www.souche.com/pages/choosecarpage/choose-car-detail.html?carId=AUUld1nWvN"}])');
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
					href:"http://www.souche.com/"
				},
				{
					name:"品牌大全",
					href:"http://www.souche.com/"
				},
				{
					name:"车系大全",
					href:"http://www.souche.com/"
				}
			]
		},
		{
			title:"购车指南",
			options:[
				{
					name:"如何挑选二手车",
					href:"http://www.souche.com/"
				},
				{
					name:"如何判断事故火烧水浸车",
					href:"http://www.souche.com/"
				},
				{
					name:"二手车指标说明",
					href:"http://www.souche.com/"
				}
			]
		},
		{
			title:"关于我们",
			options:[
				{
					name:"大搜车理念",
					href:"http://www.souche.com/"
				},
				{
					name:"牛车",
					href:"http://www.souche.com/"
				},
				{
					name:"大风车",
					href:"http://www.souche.com/"
				},
				{
					name:"大搜车手机版",
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
				li.innerText=option.name;
				li.href=option.href;
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
		title:"大搜车",
		name:"哈哈",
		href:""
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
		{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
		{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
		{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
		{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
		{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:""
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
		name:"哈哈",
		href:"#"
	},
	{
		title:"大搜车",
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
