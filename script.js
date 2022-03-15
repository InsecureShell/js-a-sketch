function createCanvas() {
    for (let i = 0; i < 257; i++) {
        const block = document.createElement('div');

        document.getElementById("canvas").appendChild(block);
        
        console.log(`Created block #${i}`);
    }
}

createCanvas();