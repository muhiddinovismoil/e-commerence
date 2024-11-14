import { userScheme } from '../schema/index.js'
export const validateUser = (req, res, next) => {
    try {
        const { error } = userScheme.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
