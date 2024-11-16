import { reviewsSchema } from '../validations/index.js'
export const validateReviews = (req, res, next) => {
    try {
        const { error } = reviewsSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
