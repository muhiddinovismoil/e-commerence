import Joi from 'joi'
export const cartItemScheme = Joi.object({
    cart_id: Joi.number().integer().required(),
    product_id: Joi.number().integer().required(),
    quantity: Joi.number().integer().required(),
})
