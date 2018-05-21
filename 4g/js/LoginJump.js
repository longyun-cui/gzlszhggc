/// <reference path="jquery-1.4.1.min.js" />
function showPage(page, isRetrun) {
    var oBaseColl = document.getElementsByTagName('base');
    var chost = ((oBaseColl && oBaseColl.length) ? oBaseColl[0].href : null);
    if (chost != null) {
        var htmlUrl = chost.split('/');
        chost = htmlUrl[0] + "//" + htmlUrl[2] + "/";
    }
    var AjaxUrl;
    var host = window.location.host;
    AjaxUrl = "/4g/ashx/ValideLogin.ashx?method=dele&jsoncallback=?";
    if (chost != null) {
        AjaxUrl = chost + AjaxUrl;
    }
    jQuery.getJSON(AjaxUrl, function (Json) {
        if (Json.retValue == "False") {
            if (isRetrun == "0") {
                window.location.href = "http://" + host + "/4g/usercenter/Login.aspx";
            }
            else {
                window.location.href = "http://" + host + "/4g/usercenter/Login.aspx?returnUrl=http://" + host + "/4g/" + page;
            }
        }
        else {
            window.location.href = "http://" + host + "/4g/" + page;
        }
    });
}