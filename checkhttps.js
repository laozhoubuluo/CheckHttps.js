/* 检测浏览器是否支持HTTPS */
/* 因目前少量落后操作系统或浏览器不支持SNI或Let's Encrypt证书，所以需在前端进行HTTPS检测，以确定客户端具备HTTPS能力。 */
/* 根据检测结果为具备HTTPS能力的浏览器升级至HTTPS接入方式，以提高网站整体安全性和客户声誉。 */
if(location.href.indexOf('https') == -1) {//判断现在连接是否为HTTPS，如已经是HTTPS就不作操作。
	var ImgObj = new Image();
	ImgObj.src = "right.gif";//使用HTTPS方式存取图片，不支持证书或SNI的浏览器会报错
	ImgObj.onload = function(){//加载成功则执行判断指令
		if (ImgObj.complete == "true" || (ImgObj.width > 0 && ImgObj.height > 0)) {
			location.href = location.href.replace('http://','https://');//如果获取到的图片正确则跳转网页至HTTPS版本
		}
	}
}
