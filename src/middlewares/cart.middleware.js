import { cartScheme } from '../validations/index.js'
export const validateCart = (req, res, next) => {
    try {
        const { error } = cartScheme.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
