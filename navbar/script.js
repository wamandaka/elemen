document.querySelector(".menu-icon").addEventListener("click", function () {
  var menuItems = document.querySelector(".menu-items");
  var icon = document.querySelector(".menu-icon i");

  menuItems.classList.toggle("show");
  icon.classList.toggle("active");
});
