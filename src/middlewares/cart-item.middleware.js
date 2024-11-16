import { cartItemScheme } from '../validations/index.js'
export const validateCartItem = (req, res, next) => {
    try {
        const { error } = cartItemScheme.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
