$(function () {

    $("#socialShare").socialShare({
        content: document.title,
        url: window.location.href,
        title: document.title
    });

});

$("#shareQQ").on("click", function () {
    $(this).socialShare("tQQ");
})