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
        rollSpare();
        g.roll(3);
        rollN(17,0);
        assert.equal(g.score(), 16);
        done();
    });

    it('roll a strike', done => {
        rollStrike();
        let firstRoll = getRandomInt(0,9),
            secondRoll = getRandomInt(0,9);
        g.roll(firstRoll);
        g.roll(secondRoll);
        rollN(16,0);
        assert.equal(g.score(), 10 + 2*(firstRoll + secondRoll));
        done();
    });


});

function rollSpare() {
    let firstRoll = getRandomInt(0,9)
    g.roll(firstRoll);
    g.roll(10-firstRoll);
}

function rollStrike() {
    g.roll(10);
    g.roll(0);
}

function rollN(n,pins) {
    for (let i=0; i<n; i++) {
        g.roll(pins);
    }
}

function getRandomInt(min,max) {
    return Math.floor(Math.random() * (max-min+1) + min);
}