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

        it("exposes '.close()' with 1 param", async () => {
            expect(wjsPersistence).to.have.property('close');
            expect(wjsPersistence.close).to.be.a('function').to.have.lengthOf(1);

            let res, error;
            try {
                res = await wjsPersistence.close();
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.close()'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });

        it("exposes '.databases' getter", async () => {
            let res, error;
            try {
                res = await wjsPersistence.databases;
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.databases'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });

        it("exposes '.collections' getter", async () => {
            let res, error;
            try {
                res = await wjsPersistence.collections;
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.collections'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });

        it("exposes '.documents()' with 3 params", async () => {
            expect(wjsPersistence).to.have.property('documents');
            expect(wjsPersistence.documents).to.be.a('function').to.have.lengthOf(3);

            let res, error;
            try {
                res = await wjsPersistence.documents();
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.documents()'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });

        it("exposes '.findOne()'", async () => {
            expect(wjsPersistence).to.have.property('findOne');
            expect(wjsPersistence.findOne).to.be.a('function');

            let res, error;
            try {
                res = await wjsPersistence.findOne();
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.findOne()'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });

        it("exposes '.save()' with 2 params", async () => {
            expect(wjsPersistence).to.have.property('save');
            expect(wjsPersistence.save).to.be.a('function').to.have.lengthOf(2);

            let res, error;
            try {
                res = await wjsPersistence.save();
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.save()'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });

        it("exposes '.update()' with 2 params", async () => {
            expect(wjsPersistence).to.have.property('update');
            expect(wjsPersistence.update).to.be.a('function').to.have.lengthOf(2);

            let res, error;
            try {
                res = await wjsPersistence.update();
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.update()'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });

        it("exposes '.aggregate()' with 6 params", async () => {
            expect(wjsPersistence).to.have.property('aggregate');
            expect(wjsPersistence.aggregate).to.be.a('function').to.have.lengthOf(6);

            let res, error;
            try {
                res = await wjsPersistence.aggregate();
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.aggregate()'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });

        it("exposes '.makeBackup() with 2 params", async () => {
            expect(wjsPersistence).to.have.property('makeBackup');
            expect(wjsPersistence.makeBackup).to.be.a('function').to.have.lengthOf(2);

            let res, error;
            try {
                res = await wjsPersistence.makeBackup();
            } catch (err) {
                error = err;
            }
            if (error) {
                expect(error).to.be.instanceof(WarpJSPersistenceError);
                expect(error.message).to.equal("Not implemented 'WarpJSPersistence.makeBackup()'.");
            } else {
                testHelpers.unexpectedFlow("Expected fail.", res);
            }
        });
    });
});
