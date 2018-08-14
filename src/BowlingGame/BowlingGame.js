class Game {

    constructor() {
        this.round = 0;
        this.rolls = new Array(21).fill(null);
    }

    roll(pins) {
        this.rolls[this.round++] += pins;
    }

    /**
     * @returns the total score for that game.
     */
    score() {
        let gameScore = 0;
        for (let frame = 0; frame < 10; frame++) {
            let frameScore = this._getFrameScore(frame);
            if (frameScore === 10) {
                if (this._isStrike(frame)) {
                    // STRIKE: add the score of the the next frame
                    frameScore += this._getStrikeBonus(frame);
                } else {
                    // SPARE: add the score of the first roll in the next frame
                    frameScore += this._getSpareBonus(frame);
                }
            }
            gameScore += frameScore;
        }
        return gameScore;
    }

    _getFrameScore(frame) {
        return this.rolls[2*frame] + this.rolls[2*frame+1];
    }

    _getStrikeBonus(frame) {
        return this.rolls[2*frame+2] + this.rolls[2*frame+3];
    }

    _getSpareBonus(frame) {
        return this.rolls[2*frame+2];
    }

    _isStrike(frame) {
        return this.rolls[2*frame] === 10;
    }
}

module.exports = {
    Game
};