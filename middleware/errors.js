import Err from "@/utils/errorHandler";

export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;

    let error = {...err};
    let validation = {}
    
    error.message = err.message;

    // Wrong mongoose object ID Error
    if (err.name === 'CastError') {
        const message = `Resource not found. Invalid: ${err.path}`;
        error = new Err(message, 400);
    }

    // Handling mongoose validation error
    if (err.name === 'ValidationError') {
        const message = 'Please fill out all required fields'

        for (let prop in err.errors) {
            validation[prop] = err.errors[prop].message
        }
        
        error = new Err(message, 400, validation)
    }

    res.status(err.statusCode).json({
        error,
        message: error.message,
        validation: error.validation,
        stack: error.stack
    })
}