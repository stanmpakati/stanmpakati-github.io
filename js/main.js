let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");

closeBtn.addEventListener("click", () => {
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function(optional)
});

// following are the code to change sidebar button(optional)
function menuBtnChange() {
  if (sidebar.classList.contains("open")) {
    closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); //replacing the iocns class
  } else {
    closeBtn.classList.replace("bx-menu-alt-right", "bx-menu"); //replacing the iocns class
  }
}

// To switch active states
var links = document.querySelectorAll(".link");
for (var i = 0; i < links.length; i++) {
  links[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

// Opening a snack bar when user downloads CV
function openSnackbar() {
  // Get the snackbar DIV
  var snackbar = document.getElementById("snackbar");

  // Add the "show" class to DIV
  snackbar.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function () {
    snackbar.className = snackbar.className.replace("show", "");
  }, 3000);
}

// respond to screen sizes
$(window).on("resize", resetLogo());
// $(document).ready(resetLogo());

// Set classes based on device width
function resetLogo() {
  console.log($(window).width());

  if ($(window).width() < 768) {
    $("body").addClass("mobile");
    $(".sidebar").removeClass("open");
    console.log($(".sidebar").attr("class"));
    console.log($("body").attr("class"));
  } else {
    $("body").removeClass("mobile");
  }
  console.log($(".sidebar").attr("class"));
}
