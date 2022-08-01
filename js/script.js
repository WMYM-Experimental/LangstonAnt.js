const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 500;
canvas.height = 500;

class Ant {
    constructor(x, y, direction) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    // At a white square, turn 90° clockwise, flip the color of the square, move forward one unit
    // At a black square, turn 90° counter - clockwise, flip the color of the square, move forward one unit

    // right = 0, left = 1, up = 2, down = 3

    // draw() {
    //     ctx.fillStyle = "black";
    //     ctx.beginPath()
    //     ctx.fillRect(this.x, this.y, 1, 1);
    //     ctx.closePath();
    // }

    move() {
        if (this.direction == 0) {
            this.x++;
        } else if (this.direction == 1) {
            this.x--;
        } else if (this.direction == 2) {
            this.y--;
        } else if (this.direction == 3) {
            this.y++;
        }
    }

    turn(flag) {
        if (flag == 0) {
            if (this.direction == 0) {
                this.direction = 3;
            } else if (this.direction == 1) {
                this.direction = 2;
            } else if (this.direction == 2) {
                this.direction = 0;
            } else if (this.direction == 3) {
                this.direction = 1;
            }
        } else if (flag == 1) {
            if (this.direction == 0) {
                this.direction = 2;
            } else if (this.direction == 1) {
                this.direction = 3;
            } else if (this.direction == 2) {
                this.direction = 1;
            } else if (this.direction == 3) {
                this.direction = 0;
            }
        }
    }

    check() {
        if (
            this.x >= 0 &&
            this.x <= canvas.width - 20 &&
            this.y >= 0 &&
            this.y <= canvas.height - 20
        ) {
            return true;
        }
        return false;
    }

    realocation() {
        this.x = getRandomInt(1, 40);
        this.y = getRandomInt(1, 40);
    }
}

const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

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
            if (matrix[i][j] == 0) {
                ctx.fillStyle = "#f1f1f1";
                ctx.beginPath();
                ctx.fillRect(i * 10, j * 10, 10, 10);
                ctx.fill();
                ctx.closePath();
            } else if (matrix[i][j] == 1) {
                ctx.fillStyle = "#2a9d8f";
                ctx.beginPath();
                ctx.fillRect(i * 10, j * 10, 10, 10);
                ctx.fill();
                ctx.closePath();
            }
        });
    });
};

const matrix = makeMatrix(50, 50);
const ant = new Ant(10, 20, 0);

drawMatrix(matrix);
const animate = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (ant.check()) {
        const flag = matrix[ant.x][ant.y];
        if (flag == 0) {
            ant.turn(flag);
            matrix[ant.x][ant.y] = 1;
            ant.move();
        } else if (flag == 1) {
            ant.turn(flag);
            matrix[ant.x][ant.y] = 0;
            ant.move();
        }

        drawMatrix(matrix);
        requestAnimationFrame(animate);
    } else {
        init();
    }
};

const init = () => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            matrix[i][j] = 0;
        }
    }
    ant.x = 30;
    ant.y = 20;
};

animate();
