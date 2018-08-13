const assert = require('assert');
const PrimeFactors = require('./PrimeFactors');

describe('PrimeFactors', () => {
    describe('generate', () => {

        it('nil → constant', (done) => {
            assert.deepEqual(PrimeFactors.generate(1),[]);
            done();
        });

    });
});