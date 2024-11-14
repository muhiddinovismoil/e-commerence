import { addressSchema } from '../schema/index.js'
export const validateAddress = (req, res, next) => {
    try {
        const { error } = addressSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
