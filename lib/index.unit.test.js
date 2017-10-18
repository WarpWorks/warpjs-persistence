const Promise = require('bluebird');
const testHelpers = require('@quoin/node-test-helpers');

const WarpJSPersistence = require('./index');
const WarpJSPersistenceError = require('./error');

const expect = testHelpers.expect;

describe("lib/index", () => {
    it("exports a class", () => {
        expect(WarpJSPersistence).to.be.a('function').to.have.property('name');
        expect(WarpJSPersistence.name).to.equal('WarpJSPersistence');
    });

    it("exposes `.Error`", () => {
        expect(WarpJSPersistence).to.have.property('Error');
        expect(WarpJSPersistence.Error).to.be.a('function').to.have.property('name');
        expect(WarpJSPersistence.Error.name).to.equal('WarpJSPersistenceError');
    });

    it("can be instantiated", () => {
        expect(() => new WarpJSPersistence()).not.to.throw();
    });

    describe("instance", () => {
        const wjsPersistence = new WarpJSPersistence();

        it("exposes '.close()' with 1 param", () => {
            expect(wjsPersistence).to.have.property('close');
            expect(wjsPersistence.close).to.be.a('function').to.have.lengthOf(1);
            return Promise.resolve()
                .then(() => wjsPersistence.close())
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.close()'.");
                    }
                )
            ;
        });

        it("exposes '.databases' getter", () => {
            return Promise.resolve()
                .then(() => wjsPersistence.databases)
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.databases'.");
                    }
                )
            ;
        });

        it("exposes '.collections' getter", () => {
            return Promise.resolve()
                .then(() => wjsPersistence.collections)
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.collections'.");
                    }
                )
            ;
        });

        it("exposes '.documents()' with 3 params", () => {
            expect(wjsPersistence).to.have.property('documents');
            expect(wjsPersistence.documents).to.be.a('function').to.have.lengthOf(3);
            return Promise.resolve()
                .then(() => wjsPersistence.documents())
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.documents()'.");
                    }
                )
            ;
        });

        it("exposes '.findOne()'", () => {
            expect(wjsPersistence).to.have.property('findOne');
            expect(wjsPersistence.findOne).to.be.a('function');
            return Promise.resolve()
                .then(() => wjsPersistence.findOne())
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.findOne()'.");
                    }
                )
            ;
        });

        it("exposes '.save()' with 2 params", () => {
            expect(wjsPersistence).to.have.property('save');
            expect(wjsPersistence.save).to.be.a('function').to.have.lengthOf(2);
            return Promise.resolve()
                .then(() => wjsPersistence.save())
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.save()'.");
                    }
                )
            ;
        });

        it("exposes '.update()' with 2 params", () => {
            expect(wjsPersistence).to.have.property('update');
            expect(wjsPersistence.update).to.be.a('function').to.have.lengthOf(2);
            return Promise.resolve()
                .then(() => wjsPersistence.update())
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.update()'.");
                    }
                )
            ;
        });

        it("exposes '.aggregate()' with 6 params", () => {
            expect(wjsPersistence).to.have.property('aggregate');
            expect(wjsPersistence.aggregate).to.be.a('function').to.have.lengthOf(6);
            return Promise.resolve()
                .then(() => wjsPersistence.aggregate())
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.aggregate()'.");
                    }
                )
            ;
        });

        it("exposes '.makeBackup() with 2 params", () => {
            expect(wjsPersistence).to.have.property('makeBackup');
            expect(wjsPersistence.makeBackup).to.be.a('function').to.have.lengthOf(2);
            return Promise.resolve()
                .then(() => wjsPersistence.makeBackup())
                .then(
                    (res) => testHelpers.unexpectedFlow("Expected fail.", res),
                    (err) => {
                        expect(err).to.be.instanceof(WarpJSPersistenceError);
                        expect(err.message).to.equal("Not implemented 'WarpJSPersistence.makeBackup()'.");
                    }
                )
            ;
        });
    });
});
