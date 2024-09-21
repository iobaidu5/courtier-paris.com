$(document).ready(function () {
  $("li.active, li.active2").removeClass("active active2");

  if (location.pathname === "/les-aides" || location.pathname === "/nos-styles" || location.pathname === "/pergolas-bio" || location.pathname === "/pergolas-classique" || location.pathname === "/menuiserie" || location.pathname === "/volets-roulants") {
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active2");
  } else {
    $('a[href="' + location.pathname + '"]')
      .closest("li")
      .addClass("active");
  }
});


console.log("location.pathname -> ", location.pathname)


const nav = document.querySelector(".fixedNav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav?.offsetHeight + 150) {
    nav.classList.add("navbar-active");
    nav.removeAttribute('clip-path');
  } else {
    nav.classList.remove("navbar-active");
  }
}

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    items: 1, // Number of items to display
    loop: true, // Infinite loop
    nav: true, // Show next/prev buttons
    navText: ["Prev", "Next"], // Custom text for nav buttons
    dots: true, // Show pagination dots
    responsive: {
      0: {
        items: 1 // Change for smaller screens if needed
      },
      600: {
        items: 1 // Change for medium screens if needed
      },
      1000: {
        items: 1 // Change for larger screens if needed
      }
    }
  });
});


$(document).ready(function(){

  $("#presta_1").click(function(){
     $(this).addClass("tab-active");
     $("#presta_2").removeClass("tab-active");
     $("#presta_3").removeClass("tab-active");
     $("#presta_4").removeClass("tab-active");
     $("#presta_5").removeClass("tab-active");
     $("#presta_6").removeClass("tab-active");
     $("#presta_content_1").fadeIn(1000);
     $("#presta_content_2").fadeOut(1000);
     $("#presta_content_3").fadeOut(1000);
     $("#presta_content_4").fadeOut(1000);
     $("#presta_content_6").fadeOut(1000);
     $("#presta_content_5").fadeOut(1000);
 });

   
$("#presta_2").click(function(){
     $(this).addClass("tab-active");
     $("#presta_1").removeClass("tab-active");
     $("#presta_3").removeClass("tab-active");
     $("#presta_4").removeClass("tab-active");
     $("#presta_5").removeClass("tab-active");
     $("#presta_6").removeClass("tab-active");
     $("#presta_content_2").fadeIn(1000);
     $("#presta_content_1").fadeOut(1000);
     $("#presta_content_3").fadeOut(1000);
     $("#presta_content_4").fadeOut(1000);
      $("#presta_content_6").fadeOut(1000);
     $("#presta_content_5").fadeOut(1000);
 });





 $("#presta_3").click(function(){
     $(this).addClass("tab-active");
     $("#presta_2").removeClass("tab-active");
     $("#presta_1").removeClass("tab-active");
     $("#presta_4").removeClass("tab-active");
       $("#presta_5").removeClass("tab-active");
     $("#presta_6").removeClass("tab-active");
     $("#presta_content_3").fadeIn(1000);
     $("#presta_content_2").fadeOut(1000);
     $("#presta_content_1").fadeOut(1000);
     $("#presta_content_4").fadeOut(1000);
      $("#presta_content_6").fadeOut(1000);
     $("#presta_content_5").fadeOut(1000);
 });

 $("#presta_4").click(function(){
     $(this).addClass("tab-active");
     $("#presta_2").removeClass("tab-active");
     $("#presta_3").removeClass("tab-active");
     $("#presta_1").removeClass("tab-active");
       $("#presta_5").removeClass("tab-active");
     $("#presta_6").removeClass("tab-active");
     $("#presta_content_4").fadeIn(1000);
     $("#presta_content_2").fadeOut(1000);
     $("#presta_content_3").fadeOut(1000);
     $("#presta_content_1").fadeOut(1000);
      $("#presta_content_6").fadeOut(1000);
     $("#presta_content_5").fadeOut(1000);
 });

 $("#presta_5").click(function(){
     $(this).addClass("tab-active");
     $("#presta_2").removeClass("tab-active");
     $("#presta_3").removeClass("tab-active");
     $("#presta_1").removeClass("tab-active");
     $("#presta_4").removeClass("tab-active");
     $("#presta_6").removeClass("tab-active");
     $("#presta_content_5").fadeIn(1000);
     $("#presta_content_2").fadeOut(1000);
     $("#presta_content_3").fadeOut(1000);
     $("#presta_content_1").fadeOut(1000);
     $("#presta_content_4").fadeOut(1000);
     $("#presta_content_6").fadeOut(1000);
 });

 $("#presta_6").click(function(){
     $(this).addClass("tab-active");
     $("#presta_2").removeClass("tab-active");
     $("#presta_3").removeClass("tab-active");
     $("#presta_1").removeClass("tab-active");
     $("#presta_4").removeClass("tab-active");
     $("#presta_5").removeClass("tab-active");
     $("#presta_content_4").fadeIn(1000);
     $("#presta_content_2").fadeOut(1000);
     $("#presta_content_3").fadeOut(1000);
     $("#presta_content_1").fadeOut(1000);
     $("#presta_content_5").fadeOut(1000);

 });
});




$(document).on("click", '[data-toggle="lightbox"]', function (event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});


$(document).ready(function () {
  $('.portfolio').each(function () {
    $(this).addClass('show');
  });

  $('#filters .filter').on('click', function () {
    var filterValue = $(this).data('filter');
    $('#filters .filter').removeClass('active');
    $(this).addClass('active');

    if (filterValue === '*') {
      $('.portfolio').each(function () {
        $(this).hide("slow").removeClass('show').delay(500).queue(function (next) {
          $(this).show("slow").addClass('show');
          next();
        });
      });
    } else {
      $('.portfolio').each(function () {
        $(this).hide("slow").removeClass('show');
      });
      $(filterValue).each(function () {
        $(this).hide("slow").removeClass('show').delay(500).queue(function (next) {
          $(this).show("slow").addClass('show');
          next();
        });
      });
    }
  });
});




$(document).ready(function () {
  $('#accordion').on('show.bs.collapse', function (e) {
    var $cardArrow = $(e.target).prev('.accordion-title').find('.card-arrow');
    $cardArrow.find('i').removeClass('fa-plus').addClass('fa-minus');
    $cardArrow.css('transform', 'rotate(0deg)');
  }).on('hide.bs.collapse', function (e) {
    var $cardArrow = $(e.target).prev('.accordion-title').find('.card-arrow');
    $cardArrow.find('i').removeClass('fa-minus').addClass('fa-plus');
    $cardArrow.css('transform', 'rotate(0deg)');
  });
});

function addTitleToLinks() {
  var links = document.querySelectorAll('a');

  links.forEach(function (link) {
    if (!link.hasAttribute('title')) {
      var linkText = link.textContent;
      link.setAttribute('title', linkText);
    }
  });
}

addTitleToLinks();




$(document).ready(function () {
  $('.tabs_ul li:first-child').addClass('active');
  $('.tab-content .tab-pane:first-child').addClass('in active');

  $('.tabs_ul a').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);

    $('.tabs_ul .active').removeClass('active');
    $this.parent().addClass('active');

    $('.tab-content .tab-pane').removeClass('in active');
    var target = $this.attr('href');
    $(target).addClass('in active');
  });
});




$('.counter-count').each(function () {
  $(this).prop('Counter', 0).animate({
    Counter: $(this).text()
  }, {

    //chnage count up speed here
    duration: 4000,
    easing: 'swing',
    step: function (now) {
      $(this).text(Math.ceil(now));
    }
  });
});