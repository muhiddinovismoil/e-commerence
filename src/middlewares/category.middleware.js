import { categoriesSchema } from '../validations/index.js'
export const validateCategories = (req, res, next) => {
    try {
        const { error } = categoriesSchema.validate(req.body)
        if (error) {
            throw new Error({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
