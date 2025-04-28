import {
    sounds
} from './sounds.js';
let allowOverlap = false;
let currentAudios = [];
const toggleButton = document.getElementById('toggleButton');
const stopButton = document.getElementById('stopButton');
const searchInput = document.getElementById('searchInput');
const soundBoard = document.getElementById('soundboard');
toggleButton.onclick = () => {
    allowOverlap = !allowOverlap;
    toggleButton.textContent = allowOverlap ? '🔊 Overlap: ON' : '🔇 Overlap: OFF';
};
stopButton.onclick = () => {
    currentAudios.forEach(a => a.pause());
    currentAudios = [];
};

function renderSounds(filter = '') {
    soundBoard.innerHTML = '';
    sounds.filter(s => s.name.toLowerCase().includes(filter.toLowerCase())).forEach(sound => {
        const wrapper = document.createElement('div');
        wrapper.className = 'sound-wrapper';
        const button = document.createElement('button');
        button.className = 'sound-button-img';
        button.style.setProperty('--btn-color', sound.color);
        const image = document.createElement('div');
        image.className = 'sound-image';
        button.appendChild(image);
        button.onclick = () => {
            if (!allowOverlap) {
                currentAudios.forEach(a => a.pause());
                currentAudios = [];
            }
            const audio = new Audio("https://cdn.jsdelivr.net/gh/genizy/soundboard@main/"+sound.mp3);
            audio.play();
            currentAudios.push(audio);
            image.classList.add('pressed');
            setTimeout(() => image.classList.remove('pressed'), 150);
        };
        const label = document.createElement('div');
        label.className = 'sound-label';
        label.textContent = sound.name;
        wrapper.appendChild(button);
        wrapper.appendChild(label);
        soundBoard.appendChild(wrapper);
    });
}
renderSounds();
searchInput.addEventListener('input', () => {
    renderSounds(searchInput.value);
});