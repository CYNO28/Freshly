$('.slick-carousel').slick({
    infinite: true,
    slidesToShow: 3, // Shows a three slides at a time
    slidesToScroll: 3, // When you click an arrow, it scrolls 1 slide at a time
    arrows: true, // Adds arrows to sides of slider
    dots: true // Adds the dots on the bottom
  });
  function freshlybusinessHandler(){
    window.location.href='freshlybusiness.html'
  }

    var img=document.querySelector(".nav_top_logo2>img")
    img.addEventListener('mouseover',function(){

      img.setAttribute( "src",'https://assets-global.website-files.com/5d03b4e130118314af624b20/5f7b2e54745410836cfa3955_bizlogo_main-07.svg')  
    })
    img.addEventListener('mouseleave',function(){
      
      img.setAttribute( "src",'https://assets-global.website-files.com/5d03b4e130118314af624b20/5f7b2e5362c26e009ed80a5a_bizlogo_gray-09.svg')  
    })