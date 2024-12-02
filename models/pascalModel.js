
function generatePascalsTriangle(numRows) {
    const triangle = [];
    for (let rowNum = 0; rowNum < numRows; rowNum++) {
        const row = Array(rowNum + 1).fill(1);
 
        for (let j = 1; j < rowNum; j++) {
            row[j] = triangle[rowNum - 1][j - 1] + triangle[rowNum - 1][j];
            //console.log(row[j])
        }
        triangle.push(row);
    }
    return triangle;
}

module.exports = {
    generatePascalsTriangle
};