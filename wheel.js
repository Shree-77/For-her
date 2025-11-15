const wheel = document.getElementById("prize-wheel");
const spinBtn = document.getElementById("spin-button");
const message = document.getElementById("prize-message");

const prizes = [
  "Unlimited Kisses",
  "Unlimited Hugs",
  "Unlimited Hand Holds",
  "Unlimited Cuddles",
  "Unlimited Dates",
  "Unlimited Surprises",
];

let rotation = 0;

spinBtn.addEventListener("click", () => {
  const spin = Math.floor(3000 + Math.random() * 3000);
  rotation += spin;

  wheel.style.transform = `rotate(${rotation}deg)`;

  setTimeout(() => {
    const actualDeg = rotation % 360;
const sliceAngle = 360 / prizes.length;

// reverse direction
let sliceIndex = Math.floor((360 - actualDeg) / sliceAngle);

// wrap around
sliceIndex = sliceIndex % prizes.length;

message.textContent = "You won: " + prizes[sliceIndex];

  }, 4000);
});
