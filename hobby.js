// hobby.js

document.addEventListener("DOMContentLoaded", function () {
    const bubbleBox = document.querySelector(".bubbles");
    const EMOJIS = ["💖","✨","🌸","💗","⭐","💙","🌟","💞","🩷","💜","🌼","🌊"];
    const TOTAL = 20; // how many floating emojis

    for (let i = 0; i < TOTAL; i++) {
        const span = document.createElement("span");
        span.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];

        // Random positions & speed
        span.style.left = Math.random() * 100 + "%";
        span.style.animationDuration = 6 + Math.random() * 10 + "s";
        span.style.fontSize = 20 + Math.random() * 25 + "px";

        bubbleBox.appendChild(span);
    }
});