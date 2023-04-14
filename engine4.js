const mazeRunner = (maze, directions) => {
    let ver = maze.findIndex(val => val.includes(2));
    let hor = maze[ver].includes(2);
    for (const elm of directions) {
        switch (elm) {
            case `N`:
                ver--;
                break;
            case `S`:
                ver++;
                break;
            case `W`:
                hor--;
                break;
            case `E`:
                hor++;
        }
        if (maze[ver] && maze[ver][hor] === 3) return `Finish`;
        if (!maze[ver] || maze[ver][hor] === undefined || maze[ver][hor] === 1) return `Dead`;
    }
    return `Lost`;
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