import Joi from 'joi'
export const categoriesSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    tag: Joi.string().required(),
})
