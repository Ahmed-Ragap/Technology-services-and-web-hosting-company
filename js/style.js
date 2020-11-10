$(document).ready(function () {
  /*this for adding class active to links */
  $("button.fixed").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      1500
    );
  });

  /*this for scroll to top button */
  $("button.fixed").click(function () {
    $("this").addClass("active-li").siblings().removeClass("active-li");
  });
  //this for scroll to top button
  $(window).on("scroll", function () {
    if (Math.round($(window).scrollTop()) >= 500) {
      $("button.fixed").css("visibility", "visible");
    } else {
      $("button.fixed").css("visibility", "hidden");
    }
  });
  $(window).on("scroll", function () {
    if (Math.round($(window).scrollTop()) >= 100) {
      $("nav").addClass("scrollNow");
    } else {
      $("nav").removeClass("scrollNow");
    }
  });

  /*this for scrolling all nav li*/
  $("nav ul li:nth-of-type(1)").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("header").offset().top,
      },
      1500
    );
  });
  $("nav ul li:nth-of-type(2)").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".about").offset().top - 50,
      },
      1500
    );
  });

  $("nav ul li:nth-of-type(3)").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".preview").offset().top - 80,
      },
      1500
    );
  });

  $("nav ul li:nth-of-type(4)").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".slider").offset().top - 80,
      },
      1500
    );
  });
  $("nav ul li:nth-of-type(5)").click(function () {
    $("html, body").animate(
      {
        scrollTop: $("footer").offset().top - 80,
      },
      1500
    );
  });

  // this for slick slider
  $(".autoplay").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    rtl: false,
    dots: false,

    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: false,
        },
      },
    ],
  });
});

// for loading page
$(window).on("load", function () {
  $(".loading").fadeOut(1000);
  $(".lds-roller").fadeOut(1000);
  $("body").css("overflow", "auto");
});
