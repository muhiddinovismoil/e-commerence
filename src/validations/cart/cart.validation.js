import Joi from 'joi'
export const cartScheme = Joi.object({
    user_id: Joi.number().integer().required(),
    total: Joi.number().required(),
})
