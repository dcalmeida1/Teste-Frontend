function changeColumn(numCols) {
  let className;
  const grid = document.querySelector(".grid");
  grid.classList = "grid";

  switch (numCols) {
    case 6:
      className = "grid-6"
      break;
    case 8:
      className = "grid-8"
      break;
    default:
      className = "grid"
      break;
  }

  if (!grid.classList.contains(className)) {
    grid.classList.add(className);
  }
}