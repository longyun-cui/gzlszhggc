//---------- 搜索表单验证
jQuery( function() {
	var searchTxt = jQuery("#search input:text[name='key']").val();
	jQuery("#search").submit( function() {
									 
		var s_searchTxt = jQuery(this).find("input:text[name='key']").val();
		//var ridarr = jQuery(".selected").attr("id").split("_");
		//var rid=ridarr.pop();
		if ( s_searchTxt == "" || s_searchTxt == searchTxt || s_searchTxt == "请输入搜索关键词" || s_searchTxt == "请输入搜索关键词！" ) {
			jQuery(this).find("input:text[name='key']").val("请输入关键词！！");
			return false;
		}
		
	} ).find("input:text[name='key']").focus( function() {
		var s_searchTxt = jQuery(this).val();
		if ( s_searchTxt == searchTxt || s_searchTxt == "请输入搜索关键词" || s_searchTxt == "请输入关键词！！" ) {
			jQuery(this).val("");
		}
	} ).blur( function() {
		var s_searchTxt = jQuery(this).val();
		if ( s_searchTxt == "" || s_searchTxt == "请输入关键词" || s_searchTxt == "请输入搜索关键词！！" ) {
			jQuery(this).val(searchTxt);
		}
	} );
} );