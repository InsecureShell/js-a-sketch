let canvas = document.getElementById("canvas");
let clearButton = document.getElementById("clear");
let sliderRange = document.getElementById("blockSlider");

// this will be used for the size of the blocks by determining the number of rows
// and columns
let blockSize = sliderRange.value;

// the number of blocks will be the block size times itself
// or, the number of columns times the number of rows
// this keeps things in an even square and just changes the size of the blocks
// using grid fractions
let numBlocks = blockSize * blockSize;

function createCanvas(){
    canvas.style.gridTemplateColumns = `repeat(${blockSize}, 1fr)`;
    canvas.style.gridTemplateRows = `repeat(${blockSize}, 1fr)`;

    // loop to create the correct number of blocks
    for(let i = 0; i < numBlocks; i++) {
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