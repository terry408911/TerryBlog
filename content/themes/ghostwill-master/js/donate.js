function donated(){
	money=prompt("请输入打赏金额：","");
	document.getElementById("payAmount").value=money;
	alert("感谢您的支持，您打赏了"+money+"元！");
	document.getElementById("donate").submit();
}

function mouse_over(){
	document.getElementById("donate_img").src = "http//terrynie.com/images/after_donate.png";
}