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
     $('#top_box>.topA>span').click(function() {
         //  alert(this);
         $(this).attr(window.location.href = 'index.html').css('cursor', 'pointer');

     })
 })
 $(document).ready(function() {
     $('#top_box>.topA>.wz h2,#top_box>.topA>.wz h3,#top_box>.topA>.wz').hover(function() {
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