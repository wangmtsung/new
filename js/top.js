
//top按鈕

 window.onscroll = scrollFunction;

 function scrollFunction() { 
 if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
     document.getElementById("myBtn").style.display = "block";
 } else {
     document.getElementById("myBtn").style.display = "none";
 }
 }
// 輪播圖 
 function topFunction() {
 document.body.scrollTop = 0;
 document.documentElement.scrollTop = 0;
 }

 var owl = $('.owl-carousel');
     owl.owlCarousel({
         items:4,
         loop:true,
         margin:10,
         autoplay:true,
         autoplayTimeout:1800,
         autoplayHoverPause:true,
        
    responsive: {
        0: {
            items: 1 // 在最大寬度為 768px 時，將項目數量變為 2
        },
        768: {
            items: 4 // 在寬度大於 768px 時，恢復項目數量為 6
        }
    }
     });
     $('.play').on('click',function(){
         owl.trigger('play.owl.autoplay',[1000])
     })
     $('.stop').on('click',function(){
         owl.trigger('stop.owl.autoplay')
     })
