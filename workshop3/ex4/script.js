const coord = document.getElementById("coordinates");

const box = document.getElementById("box");

box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "lightblue";
});
box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "lightgray";
});
document.addEventListener("mousemove", (e) => {
  coord.innerHTML = `<h2> Mouse position:  X: ${e.clientX}, Y: ${e.clientY}</h2>`;
});

