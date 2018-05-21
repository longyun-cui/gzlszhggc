$(document).ready(function () {
    var imgobj = $(".qhtp a img");
    var borderColor = $("#txtBorderColor").val();
    imgobj.attr("style", "border: 2px solid " + borderColor + "; float: left;");
    var firstObj = $(".picStyle2");
    firstObj.removeClass("picStyle2");
    firstObj.addClass("picStyle1");
    firstObj.attr("style", "border: 2px solid #FFAAA0; float: left;");
    $('.cloud-zoom').attr('rel', 'adjustX:30');
    imgobj.click(function () {
        imgobj.attr("style", "border: 2px solid " + borderColor + "; float: left;");
        if (imgobj.hasClass("picStyle2")) {
            imgobj.removeClass("picStyle2");
            imgobj.addClass("picStyle1");
        }
        $(this).removeClass("picStyle1");
        $(this).addClass("picStyle2");
        $(this).attr("style", "border: 2px solid #FFAAA0; float: left;");
    });

    $("#spec-list").slidelf({
        "prev": "left-arrow",
        "next": "right-arrow",
        "speed": 1000
    });
});

