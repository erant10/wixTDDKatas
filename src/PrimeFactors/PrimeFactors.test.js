const assert = require('assert');
const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {
    describe('generate', () => {

        it('null → constant', (done) => {
            assert.deepEqual(PrimeFactors.generate(1),[]);
            done();
        });

        it('unconditional → if', (done) => {
            assert.deepEqual(PrimeFactors.generate(2),[2]);
            done();
        });

    });
});