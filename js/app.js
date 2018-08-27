$(document).ready(function() {

  const close = $(".close"); // close btn in alert
  const bell = $(".bellIcon");
  const alertListAll = $(".alertItems");

  // delete alerts
  close.on('click',(e)=>{

    const alert = e.target;
    const alertItems = $(alert).parent(".alertItems");
    $(alertItems).css("display", "none");

  });

  bell.on('click',(e)=>{

    if ($(alertListAll).css("display", "none")) {
      $(alertListAll).css("display", "flex")
    }

  });


});
