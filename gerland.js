const garland = document.querySelector('.garland');
const numLights = 40; // количество огоньков

for (let i = 0; i < numLights; i++) {
    const light = document.createElement('div');
    light.classList.add('light');
    garland.appendChild(light);
}

const lights = document.querySelectorAll('.light');

lights.forEach(light => {
    const randomDelay = Math.random() * 2; // случайная задержка от 0 до 2 секунд
    const randomDuration = Math.random() * 1 + 0.5; // случайная продолжительность от 0.5 до 1.5 секунд
    light.style.animationDelay = `${randomDelay}s`;
    light.style.animationDuration = `${randomDuration}s`;
});