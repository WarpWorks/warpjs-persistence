function rethrow(ErrorClass, message, originalError) {
    throw new ErrorClass(message, originalError);
}

class WarpJSPersistenceError extends Error {
    constructor(message, originalError) {
        super(message);
        this.name = `WarpJSPersistenceError.${this.constructor.name}`;
        this.originalError = originalError;
    }
}

WarpJSPersistenceError.rethrow = rethrow;

module.exports = WarpJSPersistenceError;
