const containerDimentions = 800;

const container = document.querySelector('.container');

let numSideSquares = 16;
let numSquares = numSideSquares ** 2;

const squareDimentions = (containerDimentions-2)/numSideSquares;

for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');
    square.setAttribute('class', 'square');
    square.style.cssText = `height: ${squareDimentions}px; 
                            width: ${squareDimentions}px;`;
    container.appendChild(square);
}

