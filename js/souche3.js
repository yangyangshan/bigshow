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