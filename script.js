const button = document.querySelector(".canvasBtn");

button.addEventListener("click", function () {
  const gridContainer = document.querySelector("#container");
  gridContainer.innerHTML = "";

  gridSize = prompt("Enter grid size");

  if (gridSize > 64 || gridSize < 0) {
    alert("Enter a valid number");
  } else {
    for (let i = 0; i < gridSize * gridSize; i++) {
      const grid = document.createElement("div");

      grid.setAttribute("id", "colored");
      grid.style =
        "border: 1px solid; width: " +
        (500 - 2 * gridSize) / gridSize +
        "px; height: " +
        (500 - 2 * gridSize) / gridSize +
        "px; border-radius: 4px";

      gridContainer.appendChild(grid);

      grid.addEventListener("mouseover", function () {
        grid.setAttribute("class", "black");
        grid.style.backgroundColor = "black";
      });
    }
  }
});
const resetBtn = document.querySelector(".removeBtn");
resetBtn.addEventListener("click", function () {
  const rmvColor = document.querySelectorAll(".black");

  for (let i = 0; i < rmvColor.length; i++) {
    rmvColor[i].style.backgroundColor = "transparent";
    rmvColor[i].classList.remove("black");
  }
});
