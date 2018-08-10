const assert = require('assert');
const Greeter = require('./Greeter.js');
const sinon = require('sinon');

let timeOfDay = 'other'; // default time to other

let logger = {
    log: console.log
};

describe('Greeter', () => {

    const name = 'Eran';

    it('Greeter is a class', done => {
        assert(typeof Greeter.prototype.constructor === 'function');
        done();
    });

    it('\'greet\' is a function', done => {
        assert(typeof new Greeter(logger).greet === 'function');
        done();
    });

    describe('Greeter.greet', () => {

        beforeEach(function () {
            originalDateNow = Date.now;
            Date.now = mockDateNow;
        });

        afterEach(function () {
            Date.now = originalDateNow; // reset the Date.now function
        });

        let greeter = new Greeter(logger);

        it('\'greet\' receives a \'name\' and outputs \'Hello <name>\'', done => {
            let greeting = greeter.greet(name),
                prefix = 'Hello ';

            assert(greeting === prefix + name);
            done();
        });

        it('\'greet\' trims the input', done => {
            assert(greeter.greet('  '+name+'  ') === greeter.greet(name));
            done();
        });

        it('\'greet\' capitalizes the first letter of the name', done => {
            let lowerCaseName = 'eran';
            assert(greeter.greet(lowerCaseName) === greeter.greet(name));
            done();
        });

        it('\'greet\' returns \'Good morning <name>\' when the time is 06:00-12:00', done => {
            timeOfDay = 'morning'; // set time to morning hours
            let message = "Good morning";
            assert(greeter.greet(name) === message + ' ' + name);
            done();
        });

        it('\'greet\' returns \'Good evening <name>\' when the time is 18:00-22:00', done => {
            timeOfDay = 'evening'; // set time to evening hours
            let message = "Good evening";
            assert(greeter.greet(name) === message + ' ' + name);
            done();
        });

        it('\'greet\' returns \'Good night <name>\' when the time is 22:00-06:00', done => {
            timeOfDay = 'night'; // set time to night hours
            let message = "Good night";
            assert(greeter.greet(name) === message + ' ' + name);
            done();
        });

        it('\'greet\' logs into console each time it is called', done => {
            let fakeLogger = {
                log: sinon.fake()
            };
            let myGreeter  = new Greeter(fakeLogger);
            let notCalledBefore = fakeLogger.log.notCalled;
            myGreeter.greet(name);
            let calledAfter = fakeLogger.log.calledOnce;
            assert(notCalledBefore && calledAfter);
            done();
        });

    })

});




////////////////////////////////
////// Helper functions ////////
////////////////////////////////

/**
 * Returns a specific time of day in ms according to the provided timeOfDay string.
 * if none provided returns Date.now()
 */

function mockDateNow() {
    switch(timeOfDay) {

        case "morning":
            hours = getRandomInt(6,11);
            break;
        case "evening":
            hours = getRandomInt(18,21);
            break;
        case "night":
            let offset = getRandomInt(0,7);
            hours = offset < 2? 22 + offset : offset - 2;
            break;
        default:
            hours = getRandomInt(12,17);
    }
    let time = new Date();
    return new Date(time.getFullYear(),time.getMonth(), time.getDay(), hours);
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
