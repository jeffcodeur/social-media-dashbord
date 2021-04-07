const themeBtn = document.getElementById("theme");

themeBtn.addEventListener("click", function () {
  //Dark Mode Selected
  if (themeBtn.checked) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
});


