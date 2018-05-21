//menu

$(document).ready(function(){
	$('.pro_lanfra span').mouseover(function(){
	
	$(this).find('.nnn').stop(true,true).slideDown();
	$(this).children("a").addClass("cur");
	});
$('.pro_lanfra span').mouseleave(function(){
	
	$(this).find('.nnn').stop(true,true).slideUp('fast');
	$(this).children("a").removeClass("cur");
	});
	
	$('.bottomnav a:last').css('border',0);
	$('.news_list li:odd').addClass('newseven');
	//index-product
	$('.productli li a').hover(function(){
		$(this).children('p').stop(true,true).slideDown()
		},function(){
		$(this).children('p').stop(true,true).slideUp()
	})
	// nav
    $(".nav li").hover(function(){
        $(this).children("a").addClass("hover");
        $(this).find("dl").stop(true,true).slideDown();
    },function(){
        $(this).find("dl").stop(true,true).slideUp();
        $(this).children("a").removeClass("hover");
    });
//menu
	$('.teacher li').eq(1).addClass('mtwo');
	$(".viewcon").find("img").each(function(index, element) {
        if($(this).width() > 950) {
			$(this).css({"height":"auto","width":"100%"});
		}
    });

	 $('.codepic').hover(function(){$('.code').fadeIn()},function(){$('.code').fadeOut()});
    $('.backup,.topbut').click(function(){
        $('body,html').animate({scrollTop:0},500)
    });
    $(".backup").hide();
    $(function () {
        $(window).scroll(function(){
            if ($(window).scrollTop()>500){
                $(".backup").fadeIn(1000);
            }else{
                $(".backup").fadeOut(1000);
            }
        })
   })
       var page = 1;
    var i = 3; 
	
    $(".next").click(function(){ 
	     var $parent = $(this).parents("div.v_show");
		 var $v_show = $parent.find("div.v_content_list"); 
		 var $v_content = $parent.find("div.v_content"); 
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ; 
		 var v_width = $v_content.width()+40 ;
		  $('.v_content_list').width(len*340);
		 if( !$v_show.is(":animated") ){  
			  if( page == page_count ){ 
				$v_show.animate({ left : '0px'}, "slow"); 
				page = 1;
				}else{
				$v_show.animate({ left : '-='+v_width }, "slow"); 
				page++;
			 }
		 }
   });
    $(".prev").click(function(){
	     var $parent = $(this).parents("div.v_show");
		 var $v_show = $parent.find("div.v_content_list"); 
		 var $v_content = $parent.find("div.v_content"); 
		 var v_width = $v_content.width();
		 var len = $v_show.find("li").length;
		 var page_count = Math.ceil(len / i) ;  
		 if( !$v_show.is(":animated") ){  
		 	 if( page == 1 ){  
				$v_show.animate({ left : '-='+v_width*(page_count-1) }, "slow");
				page = page_count;
			}else{
				$v_show.animate({ left : '+='+v_width }, "slow");
				page--;
			}
		}
    });

   
/*	$('.nav').each(function(index, element) {
		$(this).children('a').last().css('border',0)
    });
	$('.proTwo li').last().each(function(index, element) {
		$(this).children('a').css('border',0)
    });
*/	
	  });

