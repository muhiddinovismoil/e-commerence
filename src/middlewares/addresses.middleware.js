export const validateAddress = (addressSchema) => (req, res, next) => {
    try {
        const { error } = addressSchema.parse(req.body)
        if (error) {
            throw new Error({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
