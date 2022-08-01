const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

const makeMatrix = (rows, cols) => {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push(new Array(cols).fill(0));
    }
    return matrix;
};


const drawMatrix = (matrix) => {
    matrix.forEach((row, i) => {
        row.forEach((col, j) => {
            ctx.fillStyle = col === 1 ? "black" : "white";
            ctx.beginPath();
            ctx.rect(i * 10, j * 10, 10, 10);
            ctx.stroke();
            ctx.closePath();
            if (col === 1) {
                ctx.fillRect(i * 10, j * 10, 10, 10);
                ctx.fill()
            }
        });
    });
};

const matrix = makeMatrix(50, 50);

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        matrix[i][j] = Math.floor(Math.random() * 2);
    }
}

console.log(matrix)
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMatrix(matrix);
    requestAnimationFrame(animate);
};

animate();
