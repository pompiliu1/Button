const btn = document.getElementById("btn");
let colors = ["yellow", "green", "red"];
let colorsIndex = 0;
btn.addEventListener("click", function onClick() {
  btn.style.backgroundColor = colors[colorsIndex];
  ++colorsIndex;
  if (colorsIndex == colors.length) {
    colorsIndex = 0;
  }
});
