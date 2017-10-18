const Promise = require('bluebird');

const WarpJSPersistenceError = require('./error');

class WarpJSPersistence {
    constructor(host, dbName) {
        this._host = host;
        this._dbName = dbName;
    }

    close(forceClose) {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.close()'.`));
    }

    get databases() {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.databases'.`));
    }

    get collections() {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.collections'.`));
    }

    documents(collectionName, query, convertId) {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.documents()'.`));
    }

    findOne(collectionName, query, convertId) {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.findOne()'.`));
    }

    save(collectionName, doc) {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.save()'.`));
    }

    update(collectionName, doc) {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.update()'.`));
    }

    aggregate(collectionName, collectionJoinKey, foreignCollection, foreignKey, aggregationOutputName, matchQuery) {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.aggregate()'.`));
    }

    makeBackup(outputFolder, config) {
        return Promise.reject(new WarpJSPersistenceError(`Not implemented '${this.constructor.name}.makeBackup()'.`));
    }
}

WarpJSPersistence.Error = WarpJSPersistenceError;

module.exports = WarpJSPersistence;
