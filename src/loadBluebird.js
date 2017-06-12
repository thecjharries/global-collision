const logger = require("./logger");
global.Promise = require("bluebird");
logger.log(`    Constructor is now: ${Promise.prototype.constructor.name}`);

module.exports = {
    run: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                logger.log(`Constructor inside Bluebird: ${Promise.prototype.constructor.name}`);
                return resolve(true);
            })
        }).finally((result) => {
            if (result === true) {
                logger.log("    Bluebird resolved properly");
            } else {
                logger.log("    Bluebird failed to resolve properly");
            }
            return Promise.resolve(result);
        })
    }
};
