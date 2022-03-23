let canvas = document.getElementById("canvas");
let clearButton = document.getElementById("clear");
let sliderRange = document.getElementById("blockSlider");
let rgbButton = document.getElementById("rgb");
let gridButton = document.getElementById("grid");

// this will be used for the size of the blocks by determining the number of rows
// and columns
let blockSize = sliderRange.value;

// the number of blocks will be the block size times itself
// or, the number of columns times the number of rows
// this keeps things in an even square and just changes the size of the blocks
// using grid fractions
let numBlocks = blockSize * blockSize;

let rgbMode = false;

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
        block.addEventListener("mouseenter", colorBlock);

        // add the block to the canvas
        canvas.appendChild(block);
    };
};

function clearCanvas(){
    // select all of the blocks and put them in an array
    let canvasBlocks = document.querySelectorAll(".block");

    // loop over the array and switch the color of each block to white
    canvasBlocks.forEach(block => block.style.backgroundColor = "white");
};

function deleteCanvas() {
    let blocks = document.querySelectorAll(".block");

    blocks.forEach(block => block.remove());
};

function colorBlock() {

    // check if RGB mode is enabled
    // if it is then color the block randomly, otherwise use black
    if(rgbMode) {
    // set each of the RGB values to a random number
    let randR = Math.floor(Math.random() * 256);
    let randG = Math.floor(Math.random() * 256);
    let randB = Math.floor(Math.random() * 256);

    this.style.backgroundColor = `rgb(${randR}, ${randG}, ${randB})`;
    }
    else {
        this.style.backgroundColor = "black";
    }
};

function rgbToggle() {
    // toggles the RGB mode on and off
    if(rgbMode) {
        rgbMode = false;
    }
    else {
        rgbMode = true;
    };

    // updates the button styling
    this.classList.toggle("toggle");
};

function gridToggle() {
    // get all the blocks and then toggle their grid
    let canvasBlocks = document.querySelectorAll(".block");

    canvasBlocks.forEach(block => block.classList.toggle("block-grid"));

    this.classList.toggle("toggle");
};

function refreshCanvas() {
    // delete the canvas to create a new one with the right block size
    deleteCanvas();

    // update values for the size and number of blocks
    blockSize = sliderRange.value;
    numBlocks = blockSize * blockSize;

    createCanvas();
};

createCanvas();

clearButton.addEventListener("click", clearCanvas);
rgbButton.addEventListener("click", rgbToggle);
gridButton.addEventListener("click", gridToggle);

sliderRange.oninput = refreshCanvas;