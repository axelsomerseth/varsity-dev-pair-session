class Calculator {
    sum(str) {
        if (!str) {
            return 0;
        }
        const isNumber = !isNaN(str);
        if (isNumber) {
            return parseInt(str);
        }

        let arr = str.split(/,|\n/);
        return arr.reduce((a, b) => parseInt(a) + parseInt(b));
    }
}

module.exports = Calculator;