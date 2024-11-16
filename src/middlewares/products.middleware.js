import { productsSchema } from '../validations/index.js'
export const validateProducts = (req, res, next) => {
    try {
        const { error } = productsSchema.validate(req.body)
        if (error) {
            throw new Error({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
