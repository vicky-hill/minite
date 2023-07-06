class Err extends Error {
    constructor(message, statusCode, validation) {
        super(message);
        this.statusCode = statusCode;
        this.validation = validation;
        Error.captureStackTrace(this, this.constructor);
    }
}

export default Err;