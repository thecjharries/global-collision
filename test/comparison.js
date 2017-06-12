const assert = require("assert");

describe("Changing global.Promise in a module", () => {
    it("Loading Bluebird first shouldn't matter", () => {
        return require("../src/bluebirdFirst")().then((result) => {
            assert(result);
        })
    });
    it("Loading Q first shouldn't matter", () => {
        return require("../src/qFirst")().then((result) => {
            return assert(result);
        });
    });
})
