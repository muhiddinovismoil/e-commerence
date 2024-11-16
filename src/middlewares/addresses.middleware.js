export const validateAddress = (addressSchema) => (req, res, next) => {
    try {
        const { error } = addressSchema.validate(req.body)
        if (error) {
            throw new Error({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
