let canvas = document.getElementById("canvas");

function createCanvas() {
    // loop to create 256 blocks and add them to the canvas
    for(let i = 0; i < 256; i++) {
        let block = document.createElement('div');
        block.classList.add("block");

        canvas.appendChild(block);
        
        console.log(`Created block #${i}`);
    };
};

createCanvas();