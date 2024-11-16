import { userScheme } from '../validations/index.js'
export const validateUser = (req, res, next) => {
    try {
        const { error } = userScheme.validate(req.body)
        if (error) {
            throw new Error({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
