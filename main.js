const box0 = document.querySelector(".box0");
const box3 = document.querySelector(".box3");
const kadis = document.querySelector(".kadis");
const close = document.querySelector(".close");

box0.addEventListener("click", () => {
  box3.classList.add("open-box3");
});

box0.addEventListener("click", () => {
  kadis.classList.add("open-kadis");
});

close.addEventListener("click", () => {
  box3.classList.remove("open-box3");
});

close.addEventListener("click", () => {
  kadis.classList.remove("open-kadis");
});
