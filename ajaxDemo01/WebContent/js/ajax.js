/*创建XMLHttpRequest对象, 各浏览器创建方式不统一*/
function createXMLHttpRequest() {
    var xhr = null;
    if (window.ActiveXObject) { //IE浏览器创建方式
        xhr = new ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) { //非IE浏览器或IE7以上版本
        xhr = new XMLHttpRequest();
    }
    if (!(xhr)) { //异常，创建对象失败
        window.alert("创建XMLHttpRequest异常!");
    }
    return xhr;
}
