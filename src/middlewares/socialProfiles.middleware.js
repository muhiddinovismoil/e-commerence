import { socialProfilesScheme } from '../validations/index.js'
export const validateProfiles = (req, res, next) => {
    try {
        const { error } = socialProfilesScheme.validate(req.body)
        if (error) {
            throw new Error({ error: error.details[0].message })
        }
        next()
    } catch (error) {
        next(error)
    }
}
