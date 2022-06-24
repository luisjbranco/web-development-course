/*
// $(document).ready(function () {
//   $("h1").css("color", "red");
// });

// alternative is to include the cdn at the end of the body
//$("h1").css("color", "red");

// document.querySelectorAll("button")
$("button");

//$("h1").addClass("big-title");
//$("h1").addClass("big-title margin-50");

$("h1").text("Bye");

$("button").text("Don't click me");


$("a").attr("href", "https://www.yahoo.com");


$("h1").click(function () {
  $("h1").css("color", "purple");
});


// scenario 1
for (let i = 0; i < 5; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    document.querySelector("h1").style.color = "red";
  });
}

// jquery alternative
$("button").click(function () {
  $("h1").css("color", "purple");
});


$("input").keydown(function (event) {
  console.log(event.key);
});

$(document).keydown(function (event) {
  $("h1").text(event.key);
});

$("h1").on("mouseover", function () {
  $("h1").css("color", "red");
});

//add elements
$("h1").before("<button>New</button>");
$("h1").after("<button>New</button>");
$("h1").prepend("<button>New</button>");
$("h1").append("<button>New</button>");


$("button").click(function () {
  $("h1").fadeOut();
});

$("button").click(function () {
  $("h1").fadeIn();
});

$("button").click(function () {
  $("h1").fadeToggle();
});

$("button").click(function () {
  $("h1").slideUp();
});

$("button").click(function () {
  $("h1").slideDown();
});

$("button").click(function () {
  $("h1").slideToggle();
});

$("button").click(function () {
  $("h1").animate({ opacity: 0.5 });
});

$("button").click(function () {
  $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});

*/
