import { ordersSchema } from '../validations/index.js'
export const validateOrders = (req, res, next) => {
    try {
        const { error } = ordersSchema.validate(req.body)
        if (error) {
            return res.status(400).json({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
