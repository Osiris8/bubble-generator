const bubbleGenerator = () => {
  const bubble = document.createElement("span");
  bubble.classList.add("bubble");
  document.body.appendChild(bubble);

  const size = Math.random() * 200 + 100 + "px";
  console.log(size);

  bubble.style.height = size;
  bubble.style.width = size;

  bubble.style.top = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";

  const postiveNegative = Math.random() > 0.5 ? 1 : -1;
  bubble.style.setProperty(
    "--left",
    Math.random() * 100 * postiveNegative + "%"
  );

  bubble.addEventListener("click", () => {
    bubble.remove();
  });
  setTimeout(() => {
    bubble.remove();
  }, 8000);
};

setInterval(bubbleGenerator, 300);
