function validate(obj){
	var username = obj.value;
	var xhr  = createXMLHttpRequest();//创建Ajax对象
	xhr.open("get","ValidateServlet.do?username="+username+"&times="+new Date().getTime(),true);//ajax请求初始化
    
    xhr.onreadystatechange=function(){
    	if(xhr.readyState==4&&xhr.status==200){
    		if(xhr.responseText=="true"){
    			document.getElementById("msg").innerHTML="<img src='images/ok.gif' />";
    		}else{
    			document.getElementById("msg").innerHTML="用户名已被注册，请更换";
    		}
    	}
    };
    
    xhr.send();//发送请求

}