const assert = require('assert');
const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {
    describe('generate', () => {

        it('1. null → constant', (done) => {
            assert.deepEqual(PrimeFactors.generate(1),[]);
            done();
        });

        it('2. unconditional → if', (done) => {
            assert.deepEqual(PrimeFactors.generate(2),[2]);
            assert.deepEqual(PrimeFactors.generate(3),[3]);
            done();
        });

        it('3. (unconditional → if) + (statement-> recursion)', (done) => {
            assert.deepEqual(PrimeFactors.generate(4),[2,2]);
            assert.deepEqual(PrimeFactors.generate(5),[5]);
            assert.deepEqual(PrimeFactors.generate(6),[2,3]);
            assert.deepEqual(PrimeFactors.generate(7),[7]);
            assert.deepEqual(PrimeFactors.generate(8),[2,2,2]);
            done();
        });

        it('4. unconditional → if', (done) => {
            assert.deepEqual(PrimeFactors.generate(9),[3,3]);
            done();
        });

        it('5. constant → variable', (done) => {
            assert.deepEqual(PrimeFactors.generate(4620),[2,2,3,5,7,11]);
            done();
        });

    });
});