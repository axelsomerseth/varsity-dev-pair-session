const Calculator = require("./index");

// Given the user input is empty when calculating the sum then it should return zero.
test("Input is empty", () => {
    const calc = new Calculator();
    const result = calc.sum();

    expect(result).toBe(0);
});

// Given the user input is one number when calculating the sum then it should return the same number. (example "3" should equal 3)
test("Input is one number, should return same number", () => {
    const calc = new Calculator();
    const result = calc.sum("3");

    expect(result).toBe(3);
});

// Given the user input is two numbers when calculating the sum then it should return the sum of those numbers. (example "1,2" should equal 3)
test("Input is two numbers, should return the sum of them", () => {
    const calc = new Calculator();
    const result = calc.sum("1,2");

    expect(result).toBe(3);
});

// Given the user input is an unknown amount of numbers when calculating the sum then it should return the sum of all the numbers. (example "1,2,3" should equal 6)
test("Input is an unknown amount of numbers, should return the sum of them", () => {
    const calc = new Calculator();
    const result = calc.sum("1,2,3");

    expect(result).toBe(6);
});

// Given the user input is multiple numbers with new line and comma delimiters when calculating the sum then it should return the sum of all the numbers. (example "1\n2,3" should equal 6)
test("Input is multiple numbers with new line and comma delimiters, should return the sum of them", () => {
    const calc = new Calculator();
    const result = calc.sum("1\n2,3");

    expect(result).toBe(6);
});
