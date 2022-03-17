let canvas = document.getElementById("canvas");
let clearButton = document.getElementById("clear");

function createCanvas(){
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
    };
};

function clearCanvas(){
    // select all of the blocks and put them in an array
    let canvasBlocks = document.querySelectorAll(".block");

    // loop over the array and remove the block-hover class from each one
    canvasBlocks.forEach(block => block.classList.remove("block-hover"));
};

createCanvas();
clearButton.addEventListener("click", clearCanvas);