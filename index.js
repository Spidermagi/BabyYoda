const COLORS_DAY = ["#fff2", "#fff4", "#fff4", "#fff7", "#fffc"];
const COLORS_NIGHT = ["#051327", "#000"];

const generateSpaceLayer = (size, selector, totalStars, duration) => {
    const layer = [];
    for (let i = 0; i < totalStars; i++) {
        const color = COLORS_DAY[Math.floor(Math.random() * COLORS_DAY.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 white`);
    }
    const container = document.querySelector(`.${selector}`);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
};

generateSpaceLayer("1px", "space-1", 200, "25s");
generateSpaceLayer("1px", "space-2", 100, "20s");
generateSpaceLayer("1px", "space-3", 25, "15s");

const switchInput = document.querySelector('.switch__input');

switchInput.addEventListener('change', function () {
    if (this.checked) {
        transitionToDay();
    } else {
        transitionToNight();
    }
});

function transitionToNight() {
    document.body.style.transition = 'background-image 5s ease-in-out, background-color 5s ease-in-out';
    document.body.style.backgroundImage = 'linear-gradient(to top, #051327, #000)';
}

function transitionToDay() {
    document.body.style.transition = 'background-image 5s ease-in-out, background-color 5s ease-in-out';
    document.body.style.backgroundImage = 'linear-gradient(to top, #D6EAF8, #85C1E9)';
}