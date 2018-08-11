class StringCalculator {
    add(str) {
        if (str === "") {
            return 0;
        }
        if ((/-\d+/g).test(str)) {
            throw new Error(`negatives not allowed: ${str.match(/-\d+/g).join(",")}`)
        }
        let sum = str.match(/\d+/g).reduce((accumulator, currentValue) => {
            if(parseInt(currentValue) < 1000) {
                return accumulator + parseInt(currentValue)
            } else {
                return accumulator
            }
        }, 0);
        return sum;
    }
}

module.exports = {
    StringCalculator
};