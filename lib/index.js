const WarpJSPersistenceError = require('./error');

class WarpJSPersistence {
    constructor(host, dbName) {
        this._host = host;
        this._dbName = dbName;
    }

    close(forceClose) {
        throw new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.close()'.`);
    }

    get databases() {
        throw new WarpJSPersistenceError(`Not implemented '.${this.constructor.name}.databases'.`);
    }

    get collections() {
        throw new WarpJSPersistenceError(`Not implemented '.${this.constructor.name}.collections'.`);
    }

    documents(collectionName, query, convertId) {
        throw new WarpJSPersistenceError(`Not implemented '.${this.constructor.name}.documents()'.`);
    }

    findOne(collectionName, query, convertId) {
        throw new WarpJSPersistenceError(`Not implemented '.${this.constructor.name}.findOne()'.`);
    }

    save(collectionName, doc) {
        throw new WarpJSPersistenceError(`Not implemented '.${this.constructor.name}.save()'.`);
    }

    update(collectionName, doc) {
        throw new WarpJSPersistenceError(`Not implemented '.${this.constructor.name}.update()'.`);
    }

    aggregate(collectionName, collectionJoinKey, foreignCollection, foreignKey, aggregationOutputName, matchQuery) {
        throw new WarpJSPersistenceError(`Not implemented '.${this.constructor.name}.aggregate()'.`);
    }
}

WarpJSPersistence.Error = WarpJSPersistenceError;

module.exports = WarpJSPersistence;
