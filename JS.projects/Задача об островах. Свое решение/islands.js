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
        let arr = [];
        for (let elem of subgrid) {
            arr.push(elem);
        }
        console.log(arr)
    }

};


console.log(numIslends(grid1));
console.log(numIslends(grid2));
console.log(grid1[0].length);
console.log(grid1)
