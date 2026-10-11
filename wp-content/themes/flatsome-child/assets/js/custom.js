jQuery(document).ready(function($) {
    $('.wrap-sod_content_video').css('margin-top', - $('#header').height());
    
    $('#popup-sod-close').click(function() {
    	$("#bio_ep_close").trigger("click");
    });
});