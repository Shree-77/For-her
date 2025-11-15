document.addEventListener("click", (e) => {
  const heart = document.createElement("div");
  heart.className = "heart";

  document.body.appendChild(heart);

  let x = e.pageX;
  let y = e.pageY;

  heart.style.left = x + "px";
  heart.style.top = y + "px";

  setTimeout(() => {
    heart.remove();
  }, 2000);
});


setInterval(() => {
  const heart = document.createElement('div');
  heart.className = 'heart';

  heart.style.left = Math.random() * window.innerWidth + 'px';
  heart.style.top = Math.random() * document.body.scrollHeight + 'px';

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1500);
}, 100);
