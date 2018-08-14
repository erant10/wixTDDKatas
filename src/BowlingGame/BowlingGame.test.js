const {Game} = require('./BowlingGame');
const assert = require('assert');

let g;

describe('BowlingGameTest', () => {

    beforeEach(() => {
        g = new Game();
    });

    it('drop 0 pins on each roll', (done) => {
        rollN(20,0);
        assert.equal(g.score(), 0);
        done();
    });

    it('drop 1 pin on each roll', done => {
        rollN(20,1);
        assert.equal(g.score(), 20);
        done();
    });

    it('roll one spare', done => {
        g.roll(5);
        g.roll(5);
        g.roll(3);
        rollN(17,0);
        assert.equal(g.score(), 16);
        done();
    });


});


function rollN(n,pins) {
    for (let i=0; i<n; i++) {
        g.roll(pins);
    }
}