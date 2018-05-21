
(function ($) {
    $.fn.extend({
        "slidelf": function (value) {
            value = $.extend({
                "prev": "",
                "next": "",
                "speed": ""
            }, value)

            var dom_this = $(this).get(0); //��jquery����ת����DOM����;�Ա����������е��ã�
            var marginl = parseInt($("ul li:first", this).css("margin-left")); //ÿ��ͼƬmargin����ֵ
            var movew = $("ul li:first", this).outerWidth() + marginl; //��Ҫ��������ֵ

            //��ߵĶ���
            function leftani() {
                $("ul li:first", dom_this).animate({ "margin-left": -movew }, value.speed, function () {
                    $(this).css("margin-left", marginl).appendTo($("ul", dom_this));
                });
            }
            //�ұߵĶ���
            function rightani() {
                $("ul li:last", dom_this).prependTo($("ul", dom_this));
                $("ul li:first", dom_this).css("margin-left", -movew).animate({ "margin-left": marginl }, value.speed);
            }

            //������
            $("." + value.prev).click(function () {
                if (!$("ul li:first", dom_this).is(":animated")) {
                    leftani();
                }
            });

            //������
            $("." + value.next).click(function () {
                if (!$("ul li:first", dom_this).is(":animated")) {
                    rightani();
                }
            })
        }
    });
})(jQuery)