/*********************banner图***************************/
$(function(){
	var i=0;
	var index_banner_main=$(".index_ul");
	var index_div_num=$(".index_banner_main li").length;
	function Img_change(){
		var img_i=i*-1180+"px";
		index_banner_main.animate({opacity:".2"},100,function(){
			index_banner_main.css("left",img_i);
			index_banner_main.animate({opacity:"1"},100);
		})
	}
	function automatic(){
        i+=1;
        if(i>=index_div_num){
            i=0;
        }
        Img_change();
    }
	change_self_time = setInterval(automatic, 3000);
	$("#big_banner_change_wrap").hover(function(){
        clearInterval(change_self_time);
        $("#big_banner_change_wrap").children().show();
    },function(){
        change_self_time = setInterval(automatic, 3000);
        $("#big_banner_change_wrap").children().hide();
    })
    $("#big_banner_change_next").click(function(){
        i += 1;
        if (i >= index_div_num) {
            i = 0;
        }
        Img_change();
    })
    $("#big_banner_change_prev").click(function(){
        i -= 1;
        if (i <= 0) {
            i = index_div_num - 1;
        }
        Img_change();
    })
})
/*****智慧生活*****/
$("#payCard").hover(function(){
	$("#xiaoka").css("display","block");
	$("#wea").css("display","none");
	$("#lib").css("display","none");
})
$("#weather").hover(function(){
	$("#xiaoka").css("display","none");
	$("#wea").css("display","block");
	$("#lib").css("display","none");
})
$("#library").hover(function(){
	$("#xiaoka").css("display","none");
	$("#wea").css("display","none");
	$("#lib").css("display","block");
})