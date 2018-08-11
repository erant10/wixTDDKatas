const assert = require('assert');
const {StringCalculator} = require('./StringCalculator');

describe('StringCalculator', () => {
    let sc = new StringCalculator();

    it('\'add\' is a function', done => {
        assert(typeof sc.add === 'function');
        done();
    });

    describe('add', () => {
        it('An empty string returns zero', done => {
            assert(sc.add('') === 0);
            done();
        });

        it('A single number returns the value', done => {
            let num = getRandomNumber(0,9);
            assert(sc.add(num.toString()) === num);
            done();
        });

        it('Two numbers, comma delimited, returns the sum', done => {
            let num1 = getRandomNumber(0,100),
                num2 = getRandomNumber(0,100),
                str = num1.toString() + "," + num2.toString()
            assert(sc.add(str) === num1 + num2);
            done();
        });

        it('Two numbers, newline delimited, returns the sum', done => {
            let num1 = getRandomNumber(0,100),
                num2 = getRandomNumber(0,100),
                str = num1.toString() + "\n" + num2.toString()
            assert(sc.add(str) === num1 + num2);
            done();
        });

        it('Three numbers, delimited either way, returns the sum', done => {
            let num1 = getRandomNumber(0,100),
                num2 = getRandomNumber(0,100),
                num3 = getRandomNumber(0,100),
                delimiters = [',','\n'],
                str = num1.toString() + delimiters[getRandomNumber(0,1)] +
                    num2.toString() + delimiters[getRandomNumber(0,1)] +
                    num3.toString();
            assert(sc.add(str) === num1 + num2 + num3);
            done();
        });

        it('Negative numbers throw an exception with the message \'-1,2,-3\' => \'negatives not allowed: -1,-3\'', done => {
            let neg1 = getRandomNumber(-9,-1),
                pos = getRandomNumber(0,9),
                neg2 = getRandomNumber(-9,-1),
                str = neg1.toString() + "," + pos.toString() + "," + neg2.toString();
            assert.throws(() => {return sc.add(str)}, Error, `negatives not allowed: ${neg1.toString()},${neg2.toString()}`);
            done();
        });

        it('Numbers greater than 1000 are ignored', done => {
            let ignored1 = getRandomNumber(1000,2000),
                num = getRandomNumber(0,999),
                ignored2 = getRandomNumber(1000,2000)
                str = ignored1.toString() + "," + num.toString() + "," + ignored2.toString();
            assert(sc.add(str) === num);
            done();
        });

        it('A single char delimiter can be defined on the first line starting with //', done => {
            let num1 = getRandomNumber(0,9),
                num2 = getRandomNumber(0,9),
                delim = '#';
                str = `//${delim}\\n${num1}${delim}${num2}`;
            assert(sc.add(str) === num1 + num2);
            done();
        });

        it('A multi char delimiter can be defined on the first line starting with //', done => {
            let num1 = getRandomNumber(0,9),
                num2 = getRandomNumber(0,9),
                delim = '#$$#';
            str = `//${delim}\\n${num1}${delim}${num2}`;
            assert(sc.add(str) === num1 + num2);
            done();
        });
    })
});

function getRandomNumber(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min)
}