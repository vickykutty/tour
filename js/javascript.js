

        const menuBtn = document.querySelector(".menu_btn");
        const navigation  = document.querySelector(".mynavigation");
        menuBtn.addEventListener("click",() => {
            menuBtn.classList.toggle("active");
            navigation.classList.toggle("active");
        });

        //video silder

        const btns = document.querySelectorAll(".nav-btn");
        const slides = document.querySelectorAll(".video-slide");
        const contents = document.querySelectorAll(".content");
       

        var sliderNav = function(manual){
            btns.forEach((btn) => {
                btn.classList.remove("active");
            });

            slides.forEach((slide) => {
                slide.classList.remove("active");
            });
            contents.forEach((content) => {
                content.classList.remove("active");
            });

            btns[manual].classList.add("active");
            slides[manual].classList.add("active");
            contents[manual].classList.add("active");
        }

        btns.forEach((btn, i) => {
            btn.addEventListener("click", () => {
                sliderNav(i);
            })
        });
      
    
// $(window).scroll(function(){
//    $('.header').toggleClass('scrolled',$(this).scrollTop()>50);
// });

// $("#slider1").click(function(){
//    $(".slider_content").text();
// })
// $("#slide2r").click(function(){
//    $(".slider_content1").text();
// })
// $("").click(function(){
//    $("").text();
// })

// $(window).scroll(function(){
//    $(".header").css("background-color","violet");
// });

//-----page scroll enable up arrow-->

const scrollup = document.querySelector('.scrollup');

	window.addEventListener('scroll', () => {
		if(window.pageYOffset > 100){
			scrollup.classList.add("active");
		}
		else{
			scrollup.classList.remove("active");
		}
	});

// $("button").click(function(){
//    $("#vicky").hide();
// })

// var swiper = new Swiper(".reviews-slider", {
//    grabCursor:true,
//    loop:true,
//    autoHeight:true,
//    spaceBetween: 20,
//    breakpoints: {
//       0: {
//         slidesPerView: 1,
//       },
//       700: {
//         slidesPerView: 2,
//       },
//       1000: {
//         slidesPerView: 3,
//       },
//    },
// });

let loadMoreBtn = document.querySelector('.packages .load-more .btn');
let currentItem = 3;

// loadMoreBtn.onclick = () =>{
//    let boxes = [...document.querySelectorAll('.packages .box-container .box')];
//    for (var i = currentItem; i < currentItem + 3; i++){
//       boxes[i].style.display = 'inline-block';
//    };
//    currentItem += 3;
//    if(currentItem >= boxes.length){
//       loadMoreBtn.style.display = 'none';
//    }
// }

//current date set

var da = new Date();
var ye = da.getFullYear();
var mo = da.getMonth()+1;
var to = String(da.getDate()).padStart(2,'0');
var dat = ye + '-' + mo + '-' + to;
document.getElementById("date-picker").value = dat;
 
//

// $(document).ready(function(){
//     $("body").scroll(function(){
//       $("myheader").css();
//     });
//   });

$(document).ready(function(){
  $("#btnss").click(function(){
    $("#btnsss").hide();
  });
});
