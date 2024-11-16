import Joi from 'joi'
export const wishlistsScheme = Joi.object({
    user_id: Joi.number().integer().required(),
    product_id: Joi.number().integer().required(),
})
