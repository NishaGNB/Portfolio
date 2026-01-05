const landing = document.getElementById("landing");
const portfolio = document.getElementById("portfolio");

landing.addEventListener("click", () => {
  landing.style.opacity = "0";
  setTimeout(() => {
    landing.classList.add("hidden");
    portfolio.classList.remove("hidden");
  }, 400);
});

