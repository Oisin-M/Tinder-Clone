$(function() {

  var $activeSlide =$('#slides .slide:first-child');

  $(".match-tile").on("click", function() {
    var account_id = $(this).data("id");

    $.ajax({
      url: "/get/conversation/"+account_id,
      method: "post",
      dataType: "script"
    })
  });

  $(".profile-info").on("click", function() {
    var $details = $(this).closest(".slide").find(".more-details");

    $details.toggle();

    $("#slide-controls").toggleClass("open");
  });

  $(".open-conversation").on("click", function() {
    var account_id = $(this).data("id");

    $.ajax({
      url: "/get/conversation/"+account_id,
      method: "post",
      dataType: "script"
    })
  });


  $("#decline").on("click", function() {
    var user_id=$activeSlide.data("id");

    $.ajax({
      url: "/decline/"+user_id,
      method: "post",
      dataType: "ajax"
    })

    goToSlide('decline');
  });

  $("#approve").on("click", function() {
    var user_id=$activeSlide.data("id");

    $.ajax({
      url: "/approve/"+user_id,
      method: "post",
      dataType: "ajax"
    })

    goToSlide('approve');
  });

  function goToSlide(action) {
    $activeSlide.removeClass("showing");
    $activeSlide=$activeSlide.next(".slide");

    if (action=="approve") {
        console.log(action);
    }
    else {
      console.log(action);
    }

    $activeSlide.addClass("showing");
  }

  // var slides = $('#slides .slide');
  // var currentSlide = 0;

  // function nextSlide() {
  //   goToSlide(currentSlide+1);
  // }
  //
  // function previousSlide() {
  //   goToSlide(currentSlide-1)
  // }
  //
  // function goToSlide(n) {
  //   slides[currentSlide].className = 'slide';
  //   currentSlide=(n+slides.length)%slides.length;
  //   slides[currentSlide].className = 'slide showing';
  // }

});
