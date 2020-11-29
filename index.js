window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
    "#60d394",
    "#d36060",
    "#c060d3",
    "#b3d160",
    "#641adb",
    "#f123b3"
    ];

    //console.log('hi')
    //sound here
    pads.forEach((pad, index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime=0;
            sounds[index].play();

            createBubbles(index)
        });
    });

    //function to create bubles
    const createBubbles =(index)=>{
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function(){
            visual.removeChild(this);
        })
    };

});