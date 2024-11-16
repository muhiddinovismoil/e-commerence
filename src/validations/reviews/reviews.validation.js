import Joi from 'joi'
export const reviewsSchema = Joi.object({
    user_id: Joi.number().integer().required(),
    product_id: Joi.number().integer().required(),
    rating: Joi.number().integer().required(),
    comment: Joi.string().required(),
})
