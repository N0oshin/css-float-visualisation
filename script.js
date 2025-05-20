// function setFloat(direction) {
//   const ship = document.getElementById("ship");
//   // Reset position to static to float properly
//   ship.style.position = "static";
//   ship.style.float = direction;
// }

// function sinkShip() {
//   const ship = document.getElementById("ship");
//   // Remove float
//   ship.style.float = "none";
//   // Sink to bottom of sea
//   ship.style.position = "absolute";
//   ship.style.bottom = "10px";
  
// }
function setFloat(direction) {
  const ship = document.getElementById("ship");
  const explanation = document.getElementById("explanation");

  ship.style.position = "static";
  ship.style.float = direction;

  if (direction === "left") {
    explanation.innerHTML = `
      <strong>Float Left:</strong> The ship floats to the <strong>left</strong> of the container.
      Text wraps around its <strong>right side</strong>.
    `;
  } else if (direction === "right") {
    explanation.innerHTML = `
      <strong>Float Right:</strong> The ship floats to the <strong>right</strong> of the container.
      Text wraps around its <strong>left side</strong>.
    `;
  }
}

function sinkShip() {
  const ship = document.getElementById("ship");
  const explanation = document.getElementById("explanation");

  ship.style.float = "none";
  ship.style.position = "absolute";
  ship.style.bottom = "10px";

  explanation.innerHTML = `
    <strong>Clear Float:</strong> The float is cleared using <code>float: none</code> and the ship is moved with <code>position: absolute</code>.
    It no longer affects the flow of surrounding text and sinks to the bottom.
  `;
}
