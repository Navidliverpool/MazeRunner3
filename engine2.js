// Code from Codewars.
function mazeRunner(maze, dirs) {
    var y = maze.findIndex(arr => arr.includes(2));
    var x = maze[y].indexOf(2);
    var curPos;
    for (var i = 0; i < dirs.length; i++) {
        if (dirs[i] === 'N') y--;
        if (dirs[i] === 'S') y++;
        if (dirs[i] === 'W') x--;
        if (dirs[i] === 'E') x++;
        if (!maze[y]) return 'Dead';
        curPos = maze[y][x];
        if (curPos === 3) return 'Finish';
        if (curPos === 1 || curPos === undefined) return 'Dead';
    }
    return 'Lost';
}

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