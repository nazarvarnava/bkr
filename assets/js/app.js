$(document).ready(function () {

    const $valueSpan = $('.valueSpan2');
    const $value = $('#customRange11');
    $valueSpan.html($value.val());
    $value.on('input change', () => {

        $valueSpan.html($value.val());
    });
});

$(".counter-count").each(function () {
  $(this)
    .prop("Counter", 0)
    .animate(
      {
        Counter: $(this).text(),
      },
      {
        duration: 5000,
        easing: "swing",
        step: function (now) {
          $(this).text(Math.ceil(now));
        },
      }
    );
});



$(function () {
  $('.slider').on('input change', function () {
    $(this).next($('.slider_label')).html(this.value);
  });
  $('.slider_label').each(function () {
    var value = $(this).prev().attr('value');
    $(this).html(value);
  });


});

/* Smooth Scroll to sections
   =====================================*/

$("[data-scroll]").on("click", function (event) {
  event.preventDefault();

  var $this = $(this),
    elemId = $this.data('scroll'),
    elemOff = $(elemId).offset().top;
  $("#nav a").removeClass("active");
  $this.addClass("active");

  $("html, body").animate({
    scrollTop: elemOff
  }, 1000)
});

let reviewsSlider = $("#sliderTeam");

reviewsSlider.slick({
  slidesToShow: 2,
  arrows: true,
  dots: true,
  
});





/*  Aos.js
        https://github.com/michalsnik/aos
    ===============================================*/

    AOS.init({
     // disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      initClassName: 'aos-init', // class applied after initialization
      animatedClassName: 'aos-animate', // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 80, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 700, // values from 0 to 3000, with step 50ms
      easing: 'ease', // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

    });