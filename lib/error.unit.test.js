const testHelpers = require('@quoin/node-test-helpers');

const WapjsPersistenceError = require('./error');

const expect = testHelpers.expect;

describe("lib/error", () => {
    it("should expose a class", () => {
        expect(WapjsPersistenceError).to.be.a('function')
            .to.have.property('name').to.equal('WarpJSPersistenceError');
    });

    it("should have a constructor with 2 params", () => {
        expect(WapjsPersistenceError).to.have.lengthOf(2);
    });

    it("should expose a function '.rethrow()' with 3 params", () => {
        expect(WapjsPersistenceError).to.have.property('rethrow').to.be.a('function').to.have.lengthOf(3);
    });

    it("should rethrow", () => {
        expect(() => WapjsPersistenceError.rethrow(Error, 'foobar')).to.throw(Error, 'foobar');
    });

    it("should instantiate", () => {
        const error = new WapjsPersistenceError();
        expect(error).to.have.property('message').to.equal('');
        expect(error).to.have.property('name').to.equal('WarpJSPersistenceError.WarpJSPersistenceError');
    });
});
