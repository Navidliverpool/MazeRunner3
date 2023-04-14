function mazeRunner(maze, directions) {
    var path = Array(),
        curX, curY;
    for (var i = 0; i < maze.length; i++) {
        for (var j = 0; j < maze[i].length; j++) {
            if (maze[i][j] == 2) {
                curX = j;
                curY = i;
            }
        }
    }
    for (var i = 0; i < directions.length; i++) {
        if (directions[i] == 'N') curY--;
        if (directions[i] == 'S') curY++;
        if (directions[i] == 'W') curX--;
        if (directions[i] == 'E') curX++;

        // path.push(maze[curY][curX]);
        if (!maze[curY]) return 'Dead';
        if (maze[curY][curX] == 3) return 'Finish';
        if (maze[curY][curX] == undefined || maze[curY][curX] == 1) return 'Dead';
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