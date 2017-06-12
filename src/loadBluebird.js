const logger = require("./logger");
global.Promise = require("bluebird");
logger.log(`    Constructor is now: ${Promise.prototype.constructor.name}`);

module.exports = {
    run: () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                logger.log(`Constructor inside Bluebird: ${Promise.prototype.constructor.name}`);
                return resolve("Bluebird resolved");
            })
        }).finally((result) => {
            logger.log(result);
            return Promise.resolve(result);
        })
    }
};
