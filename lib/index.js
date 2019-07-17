const Promise = require('bluebird');

const WarpJSPersistenceError = require('./error');

class WarpJSPersistence {
    constructor(host, dbName) {
        this._host = host;
        this._dbName = dbName;
    }

    async close(forceClose) {
        throw new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.close()'.`);
    }

    get databases() {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.databases'.`));
    }

    get collections() {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.collections'.`));
    }

    async documents(collectionName, query, convertId) {
        throw new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.documents()'.`);
    }

    async findOne(collectionName, query, convertId) {
        throw new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.findOne()'.`);
    }

    async save(collectionName, doc) {
        throw new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.save()'.`);
    }

    async update(collectionName, doc) {
        throw new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.update()'.`);
    }

    async aggregate(collectionName, collectionJoinKey, foreignCollection, foreignKey, aggregationOutputName, matchQuery) {
        throw new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.aggregate()'.`);
    }

    async makeBackup(outputFolder, config) {
        throw new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.makeBackup()'.`);
    }
}

WarpJSPersistence.Error = WarpJSPersistenceError;

module.exports = WarpJSPersistence;
