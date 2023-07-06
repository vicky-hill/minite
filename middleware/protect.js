import jwt_decode from 'jwt-decode';

export default (req, res, next) => {
    // Get token in the header
    const token = req.headers['x-auth-token'];

    // Check if no token and getting user
    if (!token && req.url === '/api/user') {
        return res.status(200).json(null);
    }

    // Check if no token
    if (!token) {
        return res.status(401).json({ msg: 'No token, authorization denied' });
    }

    // Verify token
    try {
        const decoded = jwt_decode(token);
        req.userID = decoded.user_id;
    } catch (err) {
        return res.status(401).json({ msg: 'Token is not valid' });
    }

    next();
}