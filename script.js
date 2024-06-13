document.addEventListener('DOMContentLoaded', () => {
    const characterSelect = document.getElementById('characterSelect');
    const animationSelect = document.getElementById('animationSelect');
    const playerElement = document.getElementById('player');

    const characters = ['Laffey II', 'character2']; // Replace with actual character names
    const animations = ['attack', 'dance']; // Replace with actual animation names

    // Populate character dropdown
    characters.forEach(character => {
        const option = document.createElement('option');
        option.value = character;
        option.textContent = character;
        characterSelect.appendChild(option);
    });

    // Populate animation dropdown
    animations.forEach(animation => {
        const option = document.createElement('option');
        option.value = animation;
        option.textContent = animation;
        animationSelect.appendChild(option);
    });

    // Function to load animation
    const loadAnimation = (character, animation) => {
        playerElement.innerHTML = ''; // Clear previous player
        new spine.SpinePlayer('player', {
            jsonUrl: `${character}/${character}.json`,
            atlasUrl: `${character}/${character}.atlas`,
            animation: animation,
            backgroundColor: '#00ff00',
            width: 700,
            height: 700
        });
    };

    // Event listeners for dropdowns
    characterSelect.addEventListener('change', () => {
        const character = characterSelect.value;
        const animation = animationSelect.value;
        if (character && animation) {
            loadAnimation(character, animation);
        }
    });

    animationSelect.addEventListener('change', () => {
        const character = characterSelect.value;
        const animation = animationSelect.value;
        if (character && animation) {
            loadAnimation(character, animation);
        }
    });
});

