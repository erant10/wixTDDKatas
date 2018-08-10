// helper functions
let capitalize = function(str) {
    return str.replace(/\w\S*/g, function(txt){
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

const messages = {
    GOOD_MORNING: "Good morning",
    GOOD_EVENING: "Good evening",
    GOOD_NIGHT: "Good night",
    HELLO: 'Hello'
};

class Greeter {
    constructor(logger) {
        this.logger = logger;
    }

    greet(name) {
        let time = new Date(Date.now()).getHours(),
            message = '';

        switch(true) {
            case (time >= 6 && time < 12):
                message = messages.GOOD_MORNING;
                break;
            case (time >=18 && time < 22):
                message = messages.GOOD_EVENING;
                break;
            case (time >= 22 || time < 6):
                message = messages.GOOD_NIGHT;
                break;
            default:
                message = messages.HELLO;
        }
        let finalMessage = `${message} ${capitalize(name.trim())}`;
        this.logger.log(finalMessage);
        return finalMessage;
    }
}

module.exports = Greeter;