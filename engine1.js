// Code from Codewars.
function mazeRunner(maze, directions) {
    const hero = new Runner(maze);

    for (const direction of directions) {
        hero.goto(direction);

        if (hero.dead()) {
            return "Dead";
        }

        if (hero.finished()) {
            return "Finish";
        }
    }

    return "Lost";
}

class Runner {
    constructor(maze) {
        this.maze = maze;
        this._gotoStart();
    }

    _gotoStart() {
        this.maze.forEach((cells, row) =>
            cells.forEach((type, cell) => {
                if (type === 2) {
                    this.row = row;
                    this.cell = cell;
                }
            })
        );

        this._updatePlace();
    }

    _updatePlace() {
        this.place = this.maze[this.row] && this.maze[this.row][this.cell];
    }

    goto(direction) {
        switch (direction) {
            case "N":
                this.row -= 1;
                break;
            case "W":
                this.cell -= 1;
                break;
            case "E":
                this.cell += 1;
                break;
            case "S":
                this.row += 1;
                break;
        }

        this._updatePlace();
    }

    dead() {
        return typeof this.place !== 'number' || this.place === WALL;
    }

    finished() {
        return this.place === FINISH;
    }
}

const SAFE = 0;
const WALL = 1;
const START = 2;
const FINISH = 3;

let maze = [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0, 0, 3],
    [1, 0, 1, 0, 1, 0, 1],
    [0, 0, 1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1, 0, 1],
    [1, 0, 0, 0, 0, 0, 1],
    [1, 2, 1, 0, 1, 0, 1]
];
let direction = ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"];
console.log(mazeRunner(maze, direction));