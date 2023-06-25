const bubble = document.createElement("span");
bubble.classList.add("bubble");
document.body.appendChild(bubble);

const size = Math.random() * 200 + 100 + "px";
console.log(size);

bubble.style.height = size;
bubble.style.width = size;
