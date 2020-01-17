// 사이드바 네비를 특정 위치부터 스크롤할때 같이 움직이기 위하여
// 해당 위치까지 스크롤이 내려오면 클래스 이름을 변경  
// 자세한 scss는 sidebar.scss를 참조
$(document).ready(function () { 
    var $layer = $('.sidebar-sticky');
    var top = $layer.offset().top - parseFloat($layer.css('marginTop').replace(/auto/, 0)); 
    $(window).scroll(function (event) { 
        var y = $(this).scrollTop(); 
        if (y >= top) { 
            $layer.addClass('is-fixed');
        } else { 
            $layer.removeClass('is-fixed'); 
        } 
    }); 
});