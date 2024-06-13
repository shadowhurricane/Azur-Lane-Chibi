document.addEventListener('DOMContentLoaded', () => {
    const characterSelect = document.getElementById('characterSelect');
    const animationSelect = document.getElementById('animationSelect');
    const playerElement = document.getElementById('player');

    const characters = ['Laffey', 'Laffey II']; // List of characters with Laffey first
    const animations = ['normal', 'attack', 'dance']; // Specified animations

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

        let jsonUrl = '';
        let atlasUrl = '';

        if (character === 'Laffey II') {
            jsonUrl = `Laffey II/lafeiII_SkeletonData.json`;
            atlasUrl = `Laffey II/lafeiII_Atlas.json`;
        } else if (character === 'Laffey') {
            jsonUrl = `Laffey/lafei_SkeletonData.json`;
            atlasUrl = `Laffey/lafei_Atlas.json`;
        }

        console.log(`Loading animation for ${character} with animation ${animation}`);
        console.log(`JSON URL: ${jsonUrl}`);
        console.log(`Atlas URL: ${atlasUrl}`);

        new spine.SpinePlayer('player', {
            jsonUrl: jsonUrl,
            atlasUrl: atlasUrl,
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

    // Load default character and animation on page load
    loadAnimation('Laffey', 'normal');
});
