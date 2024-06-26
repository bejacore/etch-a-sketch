const containerDimentions = 800;

const container = document.querySelector('.container');

function getGrid(numSideSquares=16) {
    let numSquares = numSideSquares ** 2;

    const squareDimentions = (containerDimentions-2)/numSideSquares;

    for (let i = 0; i < numSquares; i++) {
        const square = document.createElement('div');
        square.setAttribute('class', 'square');
        square.style.cssText = `height: ${squareDimentions}px; 
                                width: ${squareDimentions}px;`;
        container.appendChild(square);
    }
}

function getSideSquares() {
    let numSideSquares = prompt('Enter the number of squares per side');
    numSideSquares = +numSideSquares;

    if (Number.isNaN(numSideSquares) || 
        numSideSquares > 100 || 
        numSideSquares === 0) {
        alert('Please enter a number between 1 and 100');
        return getSideSquares();
    }

    return numSideSquares;
}

function deleteGrid() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        container.removeChild(square);
    });
}

function fillSquare() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        });
    });
}

getGrid();
fillSquare();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    let numSideSquares = getSideSquares();
    deleteGrid();
    getGrid(numSideSquares);
    fillSquare();
});




