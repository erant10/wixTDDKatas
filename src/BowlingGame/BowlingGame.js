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
            let frameScore = this.rolls[2*frame] + this.rolls[2*frame+1];
            if (frameScore === 10) {
                // SPARE: add the score of the first roll in the next frame
                frameScore += this.rolls[2*frame+2]
            }
            gameScore += frameScore;
        }
        return gameScore;
    }
}

module.exports = {
    Game
};