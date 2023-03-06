let popup = document.querySelector(".popup");
let overlay = document.querySelector(".overlay");
let closeBtn = document.querySelectorAll(".close");


// display&close contact popup 

document.addEventListener("DOMContentLoaded", () => {
    function openPopup(){
        popup.style.display = "block";
        overlay.style = "visibility:visible; opacity:1";
    }
    openPopup();
  });

closeBtn.forEach(btn =>{
btn.addEventListener("click", function(){
    popup.style.display = "none";
    overlay.style = "visibility:hidden; opacity:0";
});
});


// SWIPER INITIALIZE

const swiper = new Swiper('.swiper', {
    
    
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });

