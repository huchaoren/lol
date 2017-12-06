 $(document).ready(function() {
     //  alert($('#yx>li'));
     //  $('#top_box>.topA>.topB>li').mouseenter(function() {
     //      $(this).css({
     //          "background-color": "#999",
     //          "cursor": "pointer"
     //      })
     //  })
     //  $('#top_box>.topA>.topB>li').mouseout(function() {
     //      $(this).css({
     //          "background-color": "",
     //          "cursor": "pointer"
     //      })
     //  })

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
     $(document).ready(function() {
         $('#top_box>.topA>.topB>li').hover(function() {
             $("#xiala").css('display', 'block');
         }, function() {
             $("#xiala").css('display', 'none');
         });
         $("#xiala").hover(function() {
             $(this).css('display', 'block');;
         }, function() {
             $(this).css('display', 'none');
         });
     })

 })
 $(function() {
     //  $('#loldhl>li').mouseenter(function() {
     //      $(this).addClass('zhzx').siblings().removeClass('zhzx'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
     //removeClass('active-tit')方法从被选元素移除一个或多个类。
     // var i = $(this).index();
     // $('#tp div').eq(i).css('display', 'block').addClass('active-content').siblings('#tp div').css(
     //     'display', 'none'
     // )
     for (var i = 0; i < $('#loldhl>li').length; i++) {
         $('#loldhl>li').eq(i).click(function() {
             $(this).css('cursor', 'pointer').addClass('zhzx').siblings().removeClass('zhzx'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
             //removeClass('active-tit')方法从被选元素移除一个或多个类。
             var i = $(this).index();
             $('#A1>div').eq(i).attr({ style: "display:block" }).siblings().attr({ style: "display:none" })

         })
     }

 })
 $(function() {
     $('#ssyg>.yg>dl').mouseover(function() {
         var i = $('#ssyg>.yg>dl').index(this);
         $('#ssyg>.yg>dl>dt>make').css({
             'background-color': '#ebebeb',
             'color': '#7a7a7a',
             "cursor": "pointer",
         })
         $('#ssyg>.yg>dl>dt>make').eq(i).css({
             'background-color': '#dlab57',
             'color': '#fff',
             "cursor": "pointer",
         })
         $('#ssyg>.yg>dl').css({
             'color': '#ccc',
             "cursor": "pointer",
         })
         $('#ssyg>.yg>dl').eq(i).css({
             'color': '#dlab57',
             "cursor": "pointer",
         })


         $('#ssyg>.yg>dl').mouseover(function() {
             $('#ssyg>.yg>dl>dt>make').css({
                 'background-color': '#ebebeb',
                 "cursor": "pointer",
             })
             $('#ssyg>.yg>dl').css({
                 'color': '#dlab57',
                 "cursor": "pointer",
             })
         })
     })

 })



 $(function() {
     var i = 0;
     var gou = null;
     var $LiWidth = $('#lbA>.ll').width();
     $('#lbA').width($LiWidth * 6);
     $('#lbt').mouseout(function() {
         $(this).css('cursor', 'pointer')
         dong();
     })
     $('#lbt').mouseover(function() {
         $(this).css('cursor', 'pointer')
         clearInterval(gou);
     })
     $('#sz>span').mouseover(function() {
         var index = $(this).index();
         show(index);
     })

     function dong() {
         clearInterval(gou);
         gou = setInterval(function() {
             i++;
             show(i);
             if (i == 4) {
                 i = -1;
             }

         }, 2000)
     }
     dong();

     function show(t) {
         $('#sz>span').eq(t).addClass('lll').siblings().removeClass('lll');
         var Long = -$LiWidth * t + 'px';
         $('#lbA').stop(true).animate({
             left: Long
         }, 2000)

     }
 })
 $(function() {
         $('#dh>.logo').click(function() {
             $(this).attr(window.location.href = 'index.html').css('cursor', 'pointer');

         })
     })
     // $(function() {
     //         $('#zhxw>li').mouseenter(function() {
     //             $(this).addClass('bb').siblings().removeClass('bb'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
     //             //removeClass('active-tit')方法从被选元素移除一个或多个类。
     //             var i = $(this).index();
     //             $('#ssyg div').eq(i).css('display', 'block').addClass('yg').siblings('#ssyg div').css(
     //                 'display', 'none'
     //             )

 //         })
 //     })
 // $(document).ready(function() {
 //     $("#zhxw>li").hover(function() {
 //         var i = $('#ssyg div').index(this);
 //         $("#zhxw>li").eq($(this).index()).addClass("bb").siblings().removeClass("bb");
 //         $("#ssyg div").hide().eq($(i).index()).show();
 //     });
 // })
 $(function() {
     for (var i = 0; i < $('#zhxw>li').length; i++) {
         $('#zhxw>li').eq(i).click(function() {
             $(this).css('cursor', 'pointer').addClass('bb').siblings().removeClass('bb'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
             //removeClass('active-tit')方法从被选元素移除一个或多个类。
             var i = $(this).index();
             $('#ssyg>div').eq(i).attr({ style: "display:block" }).siblings().attr({ style: "display:none" })

         })
     }
 })

 $(function() {
     for (var i = 0; i < $('#zm_box>li').length; i++) {
         $('#zm_box>li').eq(i).click(function() {

             $(this).css('cursor', 'pointer').addClass('zms').siblings().removeClass('zms'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
             //removeClass('active-tit')方法从被选元素移除一个或多个类。
             var i = $(this).index();
             $('#cz>div').eq(i).attr({ style: "display:block" }).siblings().attr({ style: "display:none" })

         })
     }
 })
 $(function() {
     for (var i = 0; i < $('#bt_tj>li').length; i++) {
         //  alert(i);
         $('#bt_tj>li').eq(i).click(function() {

             $(this).css('cursor', 'pointer').addClass('sp').siblings().removeClass('sp'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
             //removeClass('active-tit')方法从被选元素移除一个或多个类。
             var i = $(this).index();
             $('#lmzx>div').eq(i).attr({ style: "display:block" }).siblings().attr({ style: "display:none" })

         })
     }
 })

 $(function() {
     $('#lmzx>.szg>.szg_box>li').mouseover(function() {

         $(this).css({
             'color': '#e9c06c',
             'background': '#eee'
         })
     })
     $('#lmzx>.szg>.szg_box>li').mouseout(function() {

         $(this).css({
             'color': '',
             'background': ''
         })
     })
 })
 $(function() {
     $('#ssyg>.ssyg_box>.xw>li,#ssyg>.ssygA>.xw1>li,#ssyg>.ssygB>.xw2>li,#ssyg>.ssygC>.xw3>li').mouseover(function() {
         var i = $('#ssyg>.ssyg_box>.xw>li,#ssyg>.ssygA>.xw1>li,#ssyg>.ssygB>.xw2>li,#ssyg>.ssygC>.xw3>li').index(this);
         //  $('#ssyg>.ssyg_box>.xw>li').css({
         //      'color': '#d1ab57',
         //      'cursor': 'pointer'
         //  })
         $('#ssyg>.ssyg_box>.xw>li>a,#ssyg>.ssygA>.xw1>li>a,#ssyg>.ssygB>.xw2>li>a,#ssyg>.ssygC>.xw3>li>a').eq(i).css({
             'color': '#d1ab57',
             'cursor': 'pointer'
         })
         $('#ssyg>.ssyg_box>.xw>li>span,#ssyg>.ssygA>.xw1>li>span,#ssyg>.ssygB>.xw2>li>span,#ssyg>.ssygC>.xw3>li>span').eq(i).css({
             'color': '#fff',
             'background': '#d1ab57'
         })
     })
     $('#ssyg>.ssyg_box>.xw>li,#ssyg>.ssygA>.xw1>li,#ssyg>.ssygB>.xw2>li,#ssyg>.ssygC>.xw3>li').mouseout(function() {
         var i = $('#ssyg>.ssyg_box>.xw>li,#ssyg>.ssygA>.xw1>li,#ssyg>.ssygB>.xw2>li,#ssyg>.ssygC>.xw3>li').index(this);
         $('#ssyg>.ssyg_box>.xw>li>a,#ssyg>.ssygA>.xw1>li>a,#ssyg>.ssygB>.xw2>li>a,#ssyg>.ssygC>.xw3>li>a').eq(i).css({
             'color': '',
             'cursor': 'pointer'
         })
         $('#ssyg>.ssyg_box>.xw>li>span,#ssyg>.ssygA>.xw1>li>span,#ssyg>.ssygB>.xw2>li>span,#ssyg>.ssygC>.xw3>li>span').eq(i).css({
             'color': '',
             'background': ''
         })
     })
 })
 $(function() {
         //  $('#zm #cz .czA .czA1 .dj i').click(function() {
         //      $('#zm #cz .czA .czA1 .dj p').css({
         //          'cursor': 'pointer',
         //          'display': 'block'
         //      })
         //  })
         //  $('#zm #cz .czA .czA1 .dj i').cl(function() {
         //      $('#zm #cz .czA .czA1 .dj p').css({
         //          'cursor': 'pointer',
         //          'display': 'none'
         //      })
         //  })
         $("#zm #cz .czA .czA1 .dj i").click(function() {
             if ($("#zm #cz .czA .czA1 .dj p,#zm #cz .czA .czA1 .dj h1").css("display") == "none") {
                 $("#zm #cz .czA .czA1 .dj p,#zm #cz .czA .czA1 .dj h1").show();
             } else {
                 $("#zm #cz .czA .czA1 .dj p,#zm #cz .czA .czA1 .dj h1").hide();
             }
         });
     })
     //  大二

 $(function() {
     var i = 0;
     var yazi = null;
     var $LiWidth = $('#sn_box>li').width();
     $('#sn_box').width($LiWidth * 5);
     $('#sn').mouseout(function() {
         $(this).css('cursor', 'pointer')
         dongg();
     })
     $('#sn').mouseover(function() {
         $(this).css('cursor', 'pointer')
         clearInterval(yazi);
     })
     $('#ssz>span').mouseover(function() {
         var index = $(this).index();
         show(index);
     })

     function dongg() {
         clearInterval(yazi);
         yazi = setInterval(function() {
             i++;
             show(i);
             if (i == 4) {
                 i = -1;
             }

         }, 2000)
     }
     dongg();

     function show(t) {
         $('#ssz>span').eq(t).addClass('gg').siblings().removeClass('gg');
         //  alert(t)
         var Long = -$LiWidth * t + 'px';
         $('#sn_box').stop(true).animate({
             left: Long
         }, 2000)

     }
 })
 $(function() {
     $('#zb>.zb_box>li,#jie>.jie_box>.dry>.dry_box>li,#sc>.cm>.cm_box>li').mouseover(function() {

         $(this).css({
             'color': '#e9c06c',
             'background': '#eee'
         })
     })
     $('#zb>.zb_box>li,#jie>.jie_box>.dry>.dry_box>li,#sc>.cm>.cm_box>li').mouseout(function() {

         $(this).css({
             'color': '',
             'background': ''
         })
     })
 })
 $(function() {
     for (var i = 0; i < $('#jie>.ph>.ph_box>li').length; i++) {
         //  alert(i);
         $('#jie>.ph>.ph_box>li').eq(i).click(function() {

             $(this).css('cursor', 'pointer').addClass('jr').siblings().removeClass('jr'); //当前的ul>li添加一个类'active-tit'。方法返回被选元素的所有同级元素。
             //removeClass('active-tit')方法从被选元素移除一个或多个类。
             var i = $(this).index();
             $('#ph1>div').eq(i).attr({ style: "display:block" }).siblings().attr({ style: "display:none" })

         })
     }
 })