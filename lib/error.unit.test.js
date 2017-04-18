const testHelpers = require('@quoin/node-test-helpers');

const wjsError = require('./error');

const expect = testHelpers.expect;

describe("lib/error", () => {
    it("should expose a class", () => {
        expect(wjsError).to.be.a('function')
            .to.have.property('name').to.equal('WarpJSPersistenceError');
    });

    it("should have a constructor with 2 params", () => {
        expect(wjsError).to.have.lengthOf(2);
    });

    it("should expose a function '.rethrow()' with 3 params", () => {
        expect(wjsError).to.have.property('rethrow').to.be.a('function').to.have.lengthOf(3);
    });

    it("should rethrow", () => {
        expect(() => wjsError.rethrow(Error, 'foobar')).to.throw(Error, 'foobar');
    });


    it("should instantiate", ()    => {
        const error = new wjsError();
        expect(error).to.have.property('message').to.equal('');
        expect(error).to.have.property('name').to.equal('WarpJSPersistenceError.WarpJSPersistenceError');
    });
});
