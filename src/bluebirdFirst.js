const logger = require("./logger");

module.exports = () => {
    logger.log(`\
--------------------------------------------------------------------------------
Loading Bluebird first
Initial constructor: ${Promise.prototype.constructor.name}`);

    const bluebird = require("./loadBluebird");
    const q = require("./loadQ");

    return Promise.all([
        bluebird.run()
            .then((result) => {
                logger.log("    Bluebird resolved with", result);
                if (result !== true) {
                    throw new Error("Bluebird failed to resolve");
                }
            }),
        q.run()
            .then((result) => {
                logger.log("    Q resolved with ", result);
                if (result !== true) {
                    throw new Error("Q failed to resolve");
                }
            })
    ]).then(() => {
        logger.log(`\
--------------------------------------------------------------------------------`);
        return true;
    })
    .catch((error) => {
        logger.log(error);
        return false;
    });
}
