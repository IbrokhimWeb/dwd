const dwd = document.querySelector("#dwd");

let xPosition = 1;
let yPosition = 1;
let xSpeed = 3;
let ySpeed = 3;

setInterval(() => {
  if (xPosition + dwd.clientWidth >= window.innerWidth || xPosition <= 0) {
    xSpeed = -xSpeed;
  }

  if (yPosition + dwd.clientHeight >= window.innerHeight || yPosition <= 0) {
    ySpeed = -ySpeed;
  }

  xPosition += xSpeed;
  yPosition += ySpeed;

  dwd.style.left = xPosition;
  dwd.style.top = yPosition;
}, 20);
