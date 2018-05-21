// 缩放随屏幕尺寸变化

  (function () {
    var userAgent = navigator.userAgent,
        isMobile  = !!userAgent.match(/AppleWebKit.*Mobile.*/);
    if(isMobile) {
        var viewport  = document.querySelector('meta[name="viewport"]'),
            wWidth    = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth;
            sca       = wWidth/320,
            displayMode = 'phone';

        if(displayMode == "phone") {
          viewport.content='width=320,initial-scale='+sca+',minimum-scale='+sca+',maximum-scale='+sca+', user-scalable=no';
        } else if(displayMode == "pc") {
          var pcWidth = '' || 1600;
          sca = wWidth / pcWidth;
          viewport.content='width=320,initial-scale=1';
          viewport.content='width=320,initial-scale='+sca+',minimum-scale='+sca;
        }
    }
  })();

 
// 汉堡菜单
  $(function () {  
       $('#navbar').click(function (event) {  
           //取消事件冒泡  
           event.stopPropagation();  
           //按钮的toggle,如果div是可见的,点击按钮切换为隐藏的;如果是隐藏的,切换为可见的。  
           $('#nav').slideToggle("slow");  
           return false;
       });  
       //点击空白处隐藏弹出层，下面为滑动消失效果和淡出消失效果。
     $(document).click(function(event){
        var _con = $('#nav');   // 设置目标区域
        if(!_con.is(event.target) && _con.has(event.target).length === 0){ // Mark 1
        $('#nav').slideUp('slow');   //滑动消失
        
        }
    });
   })


//首页新闻
$(".time").each(function(){
            var uploadTime1 = $(this).find("p.year").text();
            var uploadYear = uploadTime1.substring(0,4); //0,4 代表从第1个字符到第4个字符之间的字符串
            $(this).find("p.year").text(uploadYear);
            var uploadTime2 = $(this).find("p.day").text();
            var uploadDay = uploadTime2.substring(5);  //5  代表从第6个字符一直到最后的字符串
            $(this).find("p.day").text(uploadDay);
          });


   
// 返回顶部
$('#backtop').on('click',function(){
	$('body').animate({
		scrollTop:0
	},500)
	return false;
})
