const testHelpers = require('@quoin/node-test-helpers');

const index = require('./index');

const expect = testHelpers.expect;

describe("lib/index", () => {
    it("should export a class", () => {
        expect(index).to.be.a('function')
            .to.have.property('name').to.equal('WarpJSPersistence');
    });

    it("should expose `.Error`", () => {
        expect(index).to.have.property('Error').to.be.a('function')
            .to.have.property('name').to.equal('WarpJSPersistenceError');
    });

    it("should instantiate", () => {
        expect(() => new index()).not.to.throw();
    });

    describe("instantiate", () => {
        const wjsPersistence = new index();

        it("should expose '.close()'", () => {
            expect(wjsPersistence).to.have.property('close').to.be.a('function');
            expect(() => wjsPersistence.close()).to.throw();
        });

        it("should expose '.databases'", () => {
            //expect(wjsPersistence).to.have.property('databases').to.be.a('function');
            expect(() => wjsPersistence.databases).to.throw();
        });

        it("should expose '.collections'", () => {
            //expect(wjsPersistence).to.have.property('collections').to.be.a('function');
            expect(() => wjsPersistence.collections).to.throw();
        });

        it("should expose '.documents()'", () => {
            expect(wjsPersistence).to.have.property('documents').to.be.a('function');
            expect(() => wjsPersistence.documents()).to.throw();
        });

        it("should expose '.findOne()'", () => {
            expect(wjsPersistence).to.have.property('findOne').to.be.a('function');
            expect(() => wjsPersistence.findOne()).to.throw();
        });

        it("should expose '.save()'", () => {
            expect(wjsPersistence).to.have.property('save').to.be.a('function');
            expect(() => wjsPersistence.save()).to.throw();
        });

        it("should expose '.aggregate.()'", () => {
            expect(wjsPersistence).to.have.property('aggregate').to.be.a('function');
            expect(() => wjsPersistence.aggregate()).to.throw();
        });
    });
});
