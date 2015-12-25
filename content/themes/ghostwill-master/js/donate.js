
var winWidth = 0;  
var winHeight = 0;  
function findDimensions(){ //函数：获取尺寸   
	//获取窗口宽度  
	if (window.innerWidth)
		winWidth = window.innerWidth;  
	else if ((document.body) && (document.body.clientWidth))  
		winWidth = document.body.clientWidth; //获取窗口高度  
	if (window.innerHeight)  
		winHeight = window.innerHeight;  
	else if ((document.body) && (document.body.clientHeight))  
		winHeight = document.body.clientHeight; //通过深入Document内部对body进行检测，获取窗口大小  
	if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth){
		winHeight = document.documentElement.clientHeight;  
		winWidth = document.documentElement.clientWidth;  
	} 
			
}

function donate(){
	// money=prompt("请输入打赏金额：","");
	// document.getElementById("payAmount").value=money;
	// alert("感谢您的支持，您打赏了"+money+"元！");
	// document.getElementById("donate").submit();

	findDimensions(); //调用函数，获取数值  
	window.onresize=findDimensions;

	//弹出层滚动居中
	function newDivCenter() {
		document.getElementById("light").top = (document.body.scrollTop + document.body.clientHeight / 2 - document.getElementById("light").height / 2 + winHeight / 2) + "px";
		// newDiv.style.left = (document.body.scrollLeft + document.body.clientWidth / 2 - newDivWidth / 2) + "px";
	}
	//处理滚动事件，使弹出层始终居中
	if (document.all){ 
		window.attachEvent("onscroll", newDivCenter);
	} else {
		window.addEventListener('scroll', newDivCenter, false);
	}
}

function mouse_over(){
	document.getElementById("donate_img").src = "http://terrynie.com/images/after_donate.png";
}

function mouse_Out(){
	document.getElementById("donate_img").src="http://terrynie.com/images/before_donate.png"
}

