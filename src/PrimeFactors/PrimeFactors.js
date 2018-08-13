function generate(number) {
    if (number === 1) return [];
    for (let divisor=2; divisor<=3; divisor++) {
        if (number % divisor === 0) {
            return [divisor].concat(generate(number / divisor))
        }
    }
    return [number];
}

module.exports = {
    generate
}