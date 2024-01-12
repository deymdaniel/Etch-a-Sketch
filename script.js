let gridSize = 24;
const gridContainer = document.querySelector("#container");

for (let i = 0; i < gridSize * gridSize; i++) {
  const grid = document.createElement("div");
  grid.setAttribute("id", "black");
  grid.style =
    "border: 1px solid; width: " +
    (500 - 2 * gridSize) / gridSize +
    "px; height: " +
    (500 - 2 * gridSize) / gridSize +
    "px; border-radius: 4px";
  // grid.style = "width: " + 10 + "px";

  gridContainer.appendChild(grid);

  grid.addEventListener("mouseover", function () {
    grid.style.backgroundColor = "black";
  });
}

// const black = document.querySelector("#black");

// black.addEventListener("mouseover", function () {
//   black.style = "background-color: black";
// });
