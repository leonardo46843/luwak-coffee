//Toggle Sidebar
const sideNav = document.querySelector("nav");

document.querySelector("#burger").onclick = () => {
  sideNav.classList.toggle("active");
};

//Click Outside
const hamburger = document.querySelector("#burger");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !sideNav.contains(e.target)) {
    sideNav.classList.remove("active");
  }
});
