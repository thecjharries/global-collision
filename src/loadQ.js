const logger = require("./logger");
global.Promise = require("q");
logger.log(`    Constructor is now: ${Promise.prototype.constructor.name}`);

module.exports = {
    run: () => {
        return Promise.fcall(() => {
            var deferred = Promise.defer();
            setTimeout(() => {
                logger.log(`Constructor inside Q: ${Promise.prototype.constructor.name}`);
                deferred.resolve("Q resolved");
            }, 1000);
            return deferred.promise;
        }).then((result) => {
            logger.log(result);
            return Promise.fcall(() => {
                return result;
            })
        });
    }
}
