const logger = require("./logger");

module.exports = () => {
    logger.log(`\
--------------------------------------------------------------------------------
Loading Q first
Initial constructor: ${Promise.prototype.constructor.name}`);

    const q = require("./loadQ");
    const bluebird = require("./loadBluebird");

    return Promise.all([
        bluebird.run()
            .then((result) => {
                logger.log("    Bluebird resolved with", result);
                if (!result) {
                    throw new Error("Result undefined");
                }
            }),
        q.run()
            .then((result) => {
                logger.log("    Q resolved with ", result);
                if (!result) {
                    throw new Error("Result undefined");
                }
            })
    ]).then(() => {
        logger.log(`\
--------------------------------------------------------------------------------`);
        resolve(true);
    })
    .catch((error) => {
        logger.log(error);
        return false;
    });
}
