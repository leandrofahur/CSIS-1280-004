// $(document).ready(function () {
//   let element = $("#whale"); ///document.getElementById("whale");
//   console.log(element.get());

//   element = $("ul.category");
//   console.log(element.get());

//   //Getting the parent

//   element = $("ul.category").parent();
//   console.log("Parent", element.get());

//   element = $("ul.category").children().last();
//   console.log("Children", element.get());

//   element = $("ul.category").siblings();
//   console.log("Using next", element.get());

//   element = $("ul.mainmenu li");
//   console.log(element.get());

//   $("#whale").addClass("hide");
// });

$(document).ready(function () {
  let element = $("#whale"); ///document.getElementById("whale");
  console.log(element.get());

  element = $("ul.category");
  console.log(element.get());

  //Getting the parent

  element = $("ul.category").parent();
  console.log("Parent", element.get());

  element = $("ul.category").children().last();
  console.log("Children", element.get());

  element = $("ul.category").siblings();
  console.log("using next", element.get());

  //next()
  //prev()

  element = $("ul.mainmenu li");
  console.log(element.get());

  $("#whale").addClass("hide");
  $("#whale").css("background-color", "yellow");
  $("#whale").css("font-style", "italic");
  $("#whale").css({ "font-weight": "bold", "font-size": "26px" });
  let props = $("whale").css(["font-weight", "font-size"]);
  console.log(props);
  $("ul.category").children().eq(2).css("background-color", "red");
});
