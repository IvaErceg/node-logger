
const chalk = require('chalk');

const message = {
    log(text, level) {
        switch (level) {
            case 'info':
                this.info(text);
                break;
            case 'warn':
               this.warn(text);
                break;
            case 'error':
                this.error(text);
                break;
        }
    },
    info(text) {
        console.log(chalk.blue(text));
    },
    warn(text) {
        console.log(chalk.yellow(text));
    },
    error(text) {
        console.log(chalk.red(text));
    }
};

module.exports = message;