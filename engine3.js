// Code from Codewars.
var findStart = function(maze) {
    for (i = 0; i < maze.length; i++) {
        for (j = 0; j < maze.length; j++)
            if (maze[i][j] == 2)
                return [i, j];
    }
}

function mazeRunner(maze, directions) {
    let pos = findStart(maze);
    for (var i = 0; i < directions.length; i++) {
        if (directions[i] == 'N')
            pos[0] -= 1;
        else if (directions[i] == 'E')
            pos[1] += 1;
        else if (directions[i] == 'W')
            pos[1] -= 1;
        else
            pos[0] += 1;
        if (pos[0] < 0 || pos[1] < 0 || pos[0] >= maze.length || pos[1] >= maze.length) return 'Dead';
        if (maze[pos[0]][pos[1]] == 1) return 'Dead';
        if (maze[pos[0]][pos[1]] == 3) return 'Finish';
    }
    return 'Lost';
}