const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const makeMatrix = (rows, cols) => {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        //figuring out how to make a row
        matrix.push(new Array(cols).fill(i % 2 === 0 ? 1 : 0));
    }
    return matrix;
};

const drawMatrix = (matrix) => {
    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            ctx.beginPath();
            ctx.fillStyle = col === 1 ? "black" : "white";
            ctx.fillRect(i * 10, j * 10, 10, 10);
        });
    });
};

const matrix = makeMatrix(canvas.width, canvas.height);

const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMatrix(matrix);
    requestAnimationFrame(animate);
};

animate();
