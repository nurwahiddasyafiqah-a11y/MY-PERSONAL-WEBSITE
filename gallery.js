// TILT EFFECT — FULLY FIXED
document.querySelectorAll('.polaroid').forEach(card => {

    card.addEventListener('mousemove', e => {
        let x = (e.offsetX / card.offsetWidth - 0.5) * 20;
        let y = (e.offsetY / card.offsetHeight - 0.5) * 20;

        card.style.transform = 
            `rotateX(${y}deg) rotateY(${x}deg) scale(1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = "rotate(-3deg)";
    });

});

