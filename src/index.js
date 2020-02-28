
exports.min = function min (array) {
    console.log(array);
    if (!Array.isArray(array) || array.length === 0) return 0;
    return array.reduce((min, curr) => Math.min(min, curr), Infinity);
}

exports.max = function max (array) {
    console.log(array);
    if (!Array.isArray(array) || array.length === 0) return 0;
    return array.reduce((max, curr) => Math.max(max, curr), -Infinity);
}

exports.avg = function avg (array) {
    console.log(array);
    if (!Array.isArray(array) || array.length === 0) return 0;
    return array.reduce((sum, curr) => sum + curr, 0) / array.length;
}
