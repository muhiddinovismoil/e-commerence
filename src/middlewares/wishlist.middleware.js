import { wishlistsScheme } from '../validations/index.js'
export const validateWishlist = (req, res, next) => {
    try {
        const { error } = wishlistsScheme.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
