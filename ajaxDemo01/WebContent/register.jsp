<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%
    String basePath = request.getScheme()+"://"
        +request.getServerName()+":"+request.getServerPort()+
        request.getContextPath()+"/";		
%>
<!DOCTYPE HTML>
<html>
<head>
<base href="<%=basePath%>" />
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="Pragma" content="no-cache" />
<meta http-equiv="Cache-Control" content="no-cache" />
<meta http-equiv="Expires" content="0" />
<title>新用户注册</title>
<script src="js/ajax.js"></script>
<script src="js/common.js"></script>
</head>
<body>
    <h2>新用户注册</h2>
    <form>
        <p>
                   用户名：<input type="text" name="username" id="username" onblur="validate(this);"/>
         <span id="msg" style="color:red;"></span>
        </p>
        <p>
                   邮箱：<input type="text" />
        </p>
        <p>
                   手机号：<input type="text" />
        </p>
        <p>
          <input type="submit" value="注册 " />
        </p>
    </form>
</body>
</html>