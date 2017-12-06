$(function() {
    for (var i = 0; i < $('#xzA>li').length; i++) {
        $('#xzA>li').eq(i).click(function() {
            $(this).addClass('xzA_box').siblings().removeClass('xzA_box'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
            //removeClass('active-tit')方法从被选元素移除一个或多个类。
            var i = $(this).index();
            $('#yx>div').eq(i).attr({ style: "display:block" }).siblings().attr({ style: "display:none" })

        })
    }
})
$(function() {
    $('#top_box>.topA>span').click(function() {

        $(this).attr(window.location.href = 'index.html').css('cursor', 'pointer');

    })
})
$(document).ready(function() {
    $('#top_box>.topA>.wz h2,#top_box>.topA>.wz h3').hover(function() {
        $("#go").css('display', 'block');
    }, function() {
        $("#go").css('display', 'none');
    });
    $("#go").hover(function() {
        $(this).css('display', 'block');;
    }, function() {
        $(this).css('display', 'none');
    });
})