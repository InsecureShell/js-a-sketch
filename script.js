let canvas = document.getElementById("canvas");

function createCanvas() {
    // loop to create 256 blocks and add them to the canvas
    for(let i = 0; i < 256; i++) {
        // create a div and give it the "block" class
        let block = document.createElement('div');
        block.classList.add("block");

        // add mouseenter event listener to color the block 
        // when the mouse hovers over it
        block.addEventListener("mouseenter", function() {
            block.classList.add("block-hover");
        });

        // add the block to the canvas
        canvas.appendChild(block);
        
        console.log(`Created block #${i}`);
    };
};

createCanvas();