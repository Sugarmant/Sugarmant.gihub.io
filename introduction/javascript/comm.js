var config = {
	
	objUrl:"https://sugarmant.github.io/introduction/",
	
	addJs:function(_url){
		var scriptDom = document.createElement("script");
		scriptDom.setAttribute("src",_url)
		document.querySelector("head").appendChild(scriptDom);
	},
	addSs:function(_type,_url){
		var linkDom = document.createElement("link");
		linkDom.setAttribute("href",_url)
		if(_type == "css"){
			linkDom.setAttribute("rel","stylesheet")
		}else if(_type == "less"){
			linkDom.setAttribute("rel","stylesheet/less")
		}else{
			console.log("addSs方法的形参_type暂只可为css或less")
		}
		linkDom.setAttribute("type","text/css")
		document.querySelector("head").appendChild(linkDom)
	},
	
}

//公共样式引用空间
config.addSs("css",config.objUrl+"css/resetcss.css")

//公共control引用空间
config.addJs(config.objUrl+"javascript/app.js")
config.addJs("//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js")
