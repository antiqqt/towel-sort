// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];

    return matrix.reduce((acc, curr, i) => {
        // If index is odd reverse current value
        if (i % 2 !== 0) {
            curr.reverse();
        }
        // Concat the arrays
        // [].concat(acc, cur) is also an option
        return [...acc, ...curr];
    }, []);
};
