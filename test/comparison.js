const assert = require("assert");
const saved = Object.assign(global.Promise);

describe("Changing global.Promise in a module", () => {
    beforeEach(() => {
        global.Promise = saved;
    });

    it("Loading Bluebird first shouldn't matter", () => {
        return require("../src/bluebirdFirst")().then((result) => {
            assert(result);
        });
    });

    it("Loading Q first shouldn't matter", () => {
        return require("../src/qFirst")().then((result) => {
            return assert(result);
        });
    });
})
