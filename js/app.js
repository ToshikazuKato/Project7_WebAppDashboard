$(document).ready(function() {

  const close = $(".close"); // close btn in alert
  const bell = $(".bellIcon");
  const alertListAll = $(".alertItems");
  const searchInput = $("#searchInput");
  const send = $("#send");
  const save = $("#save");
  let switch1 = true;
  let switch2 = true;

  // retrieve saved data from localStorage
  const jsonObj = localStorage.getItem('Key');
  const jsObj = JSON.parse(jsonObj);
  const savedTimezone = jsObj.timezone;
  $("#timezone").val(savedTimezone); //to be selected

  // delete alerts
  close.on('click',(e)=>{

    const alert = e.target;
    const alertItems = $(alert).parent(".alertItems");
    $(alertItems).css("display", "none");

  });
  // clicking bellIcon displays notifications
  bell.on('click',(e)=>{

    if ($(alertListAll).css("display", "none")) {
      $(alertListAll).css("display", "flex")
    }

  });

  //search users autocomplete
  searchInput.keyup((e)=>{

    const users = ["VICTORIA CHAMBERS", "DALE BYRD", "DAWN WOOD", "DAN OLIVER"];

    $("#searchInput").autocomplete({
      source: users,
    });

  });

  //send btn alert
  send.click((e) => {
    const search = searchInput.val();
    const textarea = $("#messageUser").val();

    if (search === "" || textarea === "") {
      alert("User and message are required");
    }else{
      alert("Message has been sent.");
    }

  });

// to track switch
  $("#switch1").click((e) => {
    switch1=!switch1;
  });
  $("#switch2").click((e) => {
    switch2=!switch2;
  });

  //save btn message and manipulate localStorage
  save.click((e) => {

    const selectedTimezone = $("#timezone option:selected").val();

    let obj = {
      email: switch1,
      profile: switch2,
      timezone: selectedTimezone
    };

    obj = JSON.stringify(obj);
    localStorage.setItem('Key',obj);

    alert("It's been saved.");

  });


}); //document
