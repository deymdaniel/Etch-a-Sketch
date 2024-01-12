let gridSize = 16;
const gridContainer = document.querySelector("#container");

for (let i = 0; i < gridSize * gridSize; i++) {
  const grid = document.createElement("div");
  grid.style =
    "border: 1px solid; width: " +
    (500 - 2 * gridSize) / gridSize +
    "px; height: " +
    (500 - 2 * gridSize) / gridSize +
    "px; border-radius: 4px";
  // grid.style = "width: " + 10 + "px";

  gridContainer.appendChild(grid);
}
