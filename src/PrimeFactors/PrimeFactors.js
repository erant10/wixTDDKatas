function generate(number) {
    if (number === 1) return [];
    if (number % 2 === 0) {
        return [2].concat(generate(number / 2))
    }
    return [number];
}

module.exports = {
    generate
}