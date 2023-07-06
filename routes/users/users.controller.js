import User from "./users.model"
import Err from "@/utils/errorHandler"
import tryCatch from "@/middleware/tryCatch"

/**
 * Save a new user
 * @property {string} req.body._id 
 * @property {string} req.body.email
 * @returns user { _id, email, createdAt }
 */
export const saveUser = tryCatch(async (req, res, next) => {
    const user = await User.create(req.body);
    res.status(201).json(user);
})

/**
 * Get current user
 * @header x-auth-token
 * @returns user { _id, email, createdAt }
 */
export const getUser = tryCatch(async (req, res, next) => {
    const user = await User.findById(req.userID)

    if (!user) return res.status(200).json(null);

    res.status(200).json(user);
})

module.exports = {
    saveUser,
    getUser
}