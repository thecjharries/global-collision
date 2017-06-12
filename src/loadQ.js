const logger = require("./logger");
global.Promise = require("q");
logger.log(`    Constructor is now: ${Promise.prototype.constructor.name}`);

module.exports = {
    run: () => {
        return Promise.fcall(() => {
            var deferred = Promise.defer();
            setTimeout(() => {
                logger.log(`Constructor inside Q: ${Promise.prototype.constructor.name}`);
                deferred.resolve(true);
            }, 1000);
            return deferred.promise;
        }).then((result) => {
            if (result === true) {
                logger.log("    Q resolved properly");
            } else {
                logger.log("    Q failed to resolve properly");
            }
            return Promise.fcall(() => {
                return result;
            })
        });
    }
}
