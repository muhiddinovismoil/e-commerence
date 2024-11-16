import Joi from 'joi'
export const productsSchema = Joi.object({
    category_id: Joi.number().integer().required(),
    title: Joi.string().min(6).required(),
    picture: Joi.string().optional(),
    summary: Joi.string().min(5).required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    discount_type: Joi.string().optional(),
    discount_value: Joi.number().optional(),
    tags: Joi.string().required(),
})
