window.addEventListener('load', () => {
    const sounds = document.querySelectorAll('.sound');
    const pads = document.querySelectorAll('.pads div');
    const visual = document.querySelector('.visual');
    const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#13c6e6", "#834ce9"];

    // lets get going with the sound here
    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            // reset the current time, the music will play at the begin
            sounds[index].currentTime = 0;
            sounds[index].play();
            createBubble(index);
        });
    });

    // create a function that makes bubbles
    const createBubble = (index) => {
        const bubbleList = visual.children;
        // console.log(bubbleList);

        // add class animation for element when it's clicked
        for (let i = 0; i < 6; i++) {
            let bubble = document.getElementById(i + 1);
            if (index === i) {
                bubble.classList.add("animation");
                bubble.style.backgroundColor = colors[index];
            }
            if (index !== i) {
                bubble.classList.remove("animation");
            }
        }
        // bubble.style.backgroundColor = colors[index];
        // bubble.style.animation = 'jump 0.8s ease';
        // bubble.classList.toggle("animation");
    };

});