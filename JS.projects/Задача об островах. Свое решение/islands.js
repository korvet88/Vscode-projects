let grid1 = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0'],
];

let grid2 = [
    ['1','1','0','0','0'],
    ['1','1','0','0','0'],
    ['0','0','1','0','0'],
    ['0','0','0','1','1'],
];

let numIslends = function(grid) {
    for (let subgrid of grid) {
        for (let elem of subgrid) {
            console.log(elem);
        }
    }

};


console.log(numIslends(grid1));
console.log(numIslends(grid2));

