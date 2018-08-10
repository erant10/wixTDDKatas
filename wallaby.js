module.exports = function () {
    return {
        env: {
            type: 'node',
            runner: 'node'
        },

        files: [
            './package.json',
            'src/**/*.js',
            '!src/**/*.test.js'
        ],

        tests: [
            'src/**/*.test.js'
        ]
    };
};